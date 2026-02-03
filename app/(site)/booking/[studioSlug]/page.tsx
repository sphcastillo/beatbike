import prisma from "@/lib/prisma";
import LocationSwitcher from "@/components/LocationSwitcher";
import BookingClient from "@/components/BookingClient";
import { proximaNovaMedium, comfortaa } from "@/app/fonts";
import { ensureUser } from "@/lib/ensureUser";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;


export default async function BookingPage({
  params,
}: {
  params: { studioSlug: string };
}) {
  const user = await (async () => {
    try {
      const result = await ensureUser();
      return result.user;
    } catch {
      redirect("/signin");
    }
  })();

  const studio = await prisma.studio.findUnique({
    where: { slug: params.studioSlug },
    select: { id: true, name: true, slug: true },
  });

  if (!studio) return <div className="p-8">Studio not found.</div>;

  const from = new Date();
  from.setDate(from.getDate() - 7);

  const to = new Date();
  to.setDate(to.getDate() + 30);

  const sessions = await prisma.classSession.findMany({
    where: {
      studioId: studio.id,
      startsAt: { gte: from, lte: to },
    },
    orderBy: { startsAt: "asc" },
    include: {
      instructor: { select: { name: true, imageUrl: true } },
      classType: { select: { name: true, durationMin: true } },
    },
  });

  const sessionsForClient = sessions.map((s) => ({
    id: s.id,
    startsAt: s.startsAt.toISOString(),
    endsAt: s.endsAt.toISOString(),
    capacity: s.capacity,
    instructor: s.instructor
      ? { name: s.instructor.name, imageUrl: s.instructor.imageUrl }
      : null,
    classType: { name: s.classType.name, durationMin: s.classType.durationMin },
  }));

  const booked = await prisma.booking.findMany({
    where: {
      userId: user.id,
      status: "BOOKED",
      classId: { in: sessions.map((s) => s.id) },
    },
    select: { classId: true },
  });
  const bookedSessionIds = booked.map((b) => b.classId);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-2">        
          <h1 className={`${comfortaa.className} text-2xl `}>Beatbike</h1>
          <h2 className={`${proximaNovaMedium.className} text-lg `}>{studio.name} Studio</h2></div>

        <LocationSwitcher currentSlug={studio.slug} />
      </div>

      <div className="mt-8">
        <BookingClient studioId={studio.id} sessions={sessionsForClient} bookedSessionIds={bookedSessionIds} />
      </div>
    </div>
  );
}
