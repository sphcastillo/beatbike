/**
SEED SPEC 

Entities:
- Studio: Tarzana, Huntington Beach
- Instructor: create X instructors (some shared names OK, but assignments differ)
- StudioInstructor: join table assigning instructors to studios
- ClassType:
  - "Cycle" duration 45
  - "$12 at 12" duration 30
- ClassSession: generated for 1 week of schedule slots per studio/day

Schedule rules:
Tarzana:
- Mon–Fri: 8 slots/day (NO 12:00 PM slot on weekdays)
- Sat/Sun: 5 slots/day

Huntington Beach:
- Mon/Fri: 8 slots/day
- Tue–Thu: 9 slots/day (INCLUDES weekday 12:00 PM slot)
- Sat/Sun: 5 slots/day

Assignment rules:
- For each studio/day, randomly assign instructors ONLY from that studio’s roster
- Constraint: each instructor <= 2 sessions per day per studio
- Create ClassSession per slot with correct ClassType + duration

Acceptance checks after seed:
- Studios = 2
- ClassTypes = 2
- Each ClassSession references: studioId, instructorId, classTypeId, startAt, endAt (or startAt+duration)
- No Tarzana weekday session at 12:00 PM
- No instructor exceeds 2 sessions/day in a studio
**/

import { PrismaClient, ClassModality } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// ---------- helpers ----------
const addMinutes = (d: Date, mins: number) => new Date(d.getTime() + mins * 60_000);

function parseTimeToDate(baseDate: Date, timeStr: string) {
  // timeStr examples: "5.45am", "12.00pm"
  const match = timeStr.trim().toLowerCase().match(/^(\d{1,2})\.(\d{2})(am|pm)$/);
  if (!match) throw new Error(`Bad time format: ${timeStr}`);

  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const ampm = match[3];

  if (ampm === "pm" && hour !== 12) hour += 12;
  if (ampm === "am" && hour === 12) hour = 0;

  const d = new Date(baseDate);
  d.setHours(hour, minute, 0, 0);
  return d;
}

function pickRandom<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickInstructorForDay(
  instructorIds: string[],
  counts: Record<string, number>,
  maxPerDay: number
) {
  const available = instructorIds.filter((id) => (counts[id] ?? 0) < maxPerDay);
  if (available.length === 0) return null;
  return pickRandom(available);
}

// ---------- your data ----------
const tarzanaInstructorNames = ["Bailey","Dana","Beth","Amanda","Suzy","Brian","Candis","Valeria","Joel"];
const hbInstructorNames = ["Bailey","Spencer","Dana","Dylan","Jasmine","Amanda","Brian","Grace","Valeria","Joel","Sasha"];

const tarzanaWeekdayTimes = ["5.45am","7.00am","8.15am","9.30am","10.45am","4.15pm","5.30pm","6.45pm"];
const tarzanaWeekendTimes = ["7.00am","8.15am","9.30am","10.45am","12.00pm"];

const hbMonFriTimes = ["5.45am","7.00am","8.15am","9.30am","10.45am","4.15pm","5.30pm","6.45pm"];
const hbTueThuTimes = ["5.45am","7.00am","8.15am","9.30am","10.45am","12.00pm","4.15pm","5.30pm","6.45pm"];
const hbWeekendTimes = ["7.00am","8.15am","9.30am","10.45am","12.00pm"];

type StudioSchedule = {
  studioName: string;
  city?: string;
  state?: string;
  instructorNames: string[];
  // per day list, starting Monday
  dayTimes: string[][];
};

const schedulePlan: StudioSchedule[] = [
  {
    studioName: "Tarzana",
    city: "Los Angeles",
    state: "CA",
    instructorNames: tarzanaInstructorNames,
    dayTimes: [
      tarzanaWeekdayTimes, // Mon
      tarzanaWeekdayTimes, // Tue
      tarzanaWeekdayTimes, // Wed
      tarzanaWeekdayTimes, // Thu
      tarzanaWeekdayTimes, // Fri
      tarzanaWeekendTimes, // Sat
      tarzanaWeekendTimes, // Sun
    ],
  },
  {
    studioName: "Huntington Beach",
    city: "Huntington Beach",
    state: "CA",
    instructorNames: hbInstructorNames,
    dayTimes: [
      hbMonFriTimes, // Mon
      hbTueThuTimes, // Tue
      hbTueThuTimes, // Wed
      hbTueThuTimes, // Thu
      hbMonFriTimes, // Fri
      hbWeekendTimes, // Sat
      hbWeekendTimes, // Sun
    ],
  },
];

async function main() {
  // 1) Class types
  const cycle = await prisma.classType.upsert({
    where: { name: "Cycle" },
    update: { durationMin: 45 },
    create: { name: "Cycle", modality: ClassModality.CYCLE, durationMin: 45 },
  });

  const twelveAtTwelve = await prisma.classType.upsert({
    where: { name: "$12 at 12" },
    update: { durationMin: 30 },
    create: { name: "$12 at 12", modality: ClassModality.CYCLE, durationMin: 30 },
  });

  // 2) Create instructors (union of both lists)
  const allInstructorNames = Array.from(new Set([...tarzanaInstructorNames, ...hbInstructorNames]));
  const instructorRows = await Promise.all(
    allInstructorNames.map((name) =>
      prisma.instructor.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );
  const instructorIdByName = new Map(instructorRows.map((i) => [i.name, i.id]));

  // 3) Create studios + assignment table
  for (const studioPlan of schedulePlan) {
    const studio = await prisma.studio.upsert({
      where: { name: studioPlan.studioName },
      update: { city: studioPlan.city, state: studioPlan.state },
      create: { name: studioPlan.studioName, city: studioPlan.city, state: studioPlan.state },
    });

    // Assign instructors to studio
    await prisma.studioInstructor.createMany({
      data: studioPlan.instructorNames.map((name) => ({
        studioId: studio.id,
        instructorId: instructorIdByName.get(name)!,
      })),
      skipDuplicates: true,
    });

    // Fetch instructor ids for this studio
    const studioInstructorIds = studioPlan.instructorNames.map((n) => instructorIdByName.get(n)!);

    // 4) Generate ONE WEEK of classes starting next Monday (so it’s predictable)
    const now = new Date();
    const day = now.getDay(); // 0=Sun..6=Sat
    const daysUntilMonday = (8 - day) % 7 || 7; // next Monday
    const monday = new Date(now);
    monday.setDate(now.getDate() + daysUntilMonday);
    monday.setHours(0, 0, 0, 0);

    // Create sessions for each day
    for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + dayIdx);

      // per-day limit tracking
      const perDayCounts: Record<string, number> = {};

      for (const timeStr of studioPlan.dayTimes[dayIdx]) {
        const startsAt = parseTimeToDate(date, timeStr);

        // Determine class type + duration
        const isWeekday = dayIdx >= 0 && dayIdx <= 4;
        const isNoon = timeStr === "12.00pm";

        const chosenClassType = isWeekday && isNoon ? twelveAtTwelve : cycle;
        const duration = chosenClassType.durationMin;
        const endsAt = addMinutes(startsAt, duration);

        // Pick an instructor (max 2/day)
        const instructorId = pickInstructorForDay(studioInstructorIds, perDayCounts, 2);

        // If you *must* fill every slot, you have two options:
        // 1) allow >2/day, or 2) allow null instructor.
        // We'll allow null instructor if we run out, so seed never fails.
        if (instructorId) perDayCounts[instructorId] = (perDayCounts[instructorId] ?? 0) + 1;

        // Upsert to avoid duplicates if you re-run seed
        await prisma.classSession.upsert({
          where: {
            studioId_startsAt_classTypeId: {
              studioId: studio.id,
              startsAt,
              classTypeId: chosenClassType.id,
            },
          },
          update: {
            endsAt,
            capacity: 20,
            instructorId: instructorId ?? null,
          },
          create: {
            studioId: studio.id,
            classTypeId: chosenClassType.id,
            startsAt,
            endsAt,
            capacity: 20,
            instructorId: instructorId ?? null,
          },
        });
      }
    }

    console.log(`✅ Seeded schedule for ${studioPlan.studioName}`);
  }

  console.log("✅ Seed complete");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
