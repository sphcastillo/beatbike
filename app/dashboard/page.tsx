import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import Link from "next/link";
import beatbikeLogo from "@/public/images/beatbikeLogo.png";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold, proximaNovaLight } from "@/app/fonts";

function sumCredits(entries: { delta: number }[]) {
  return entries.reduce((acc, e) => acc + e.delta, 0);
}

export default async function DashboardPage() {
  const { userId } = await auth();
  const clerkUser = await currentUser();

  if (!userId || !clerkUser) return null;

  // 1) Ensure user exists in your DB (or fetch)
  const firstName =
    clerkUser.firstName ??
    clerkUser.username ??
    "there";

  // 2) Pull dashboard data
  // const [creditEntries, upcomingBookings] = await Promise.all([
  //   prisma.creditsLedger.findMany({
  //     where: { userId: user.id },
  //     select: { delta: true },
  //   }),
  //   prisma.booking.findMany({
  //     where: { userId: user.id },
  //     orderBy: { startsAt: "asc" },
  //     take: 5,
  //     include: {
  //       classSession: {
  //         include: { studio: true, instructor: true, classType: true },
  //       },
  //     },
  //   }),
  // ]);

  // const credits = sumCredits(creditEntries);

  return (
    <div className="min-h-screen bg-zinc-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className={`${proximaNovaSemibold.className} text-3xl font-semibold tracking-tight`}>Welcome back, {firstName}</h1>
          </div>

          <div className="flex gap-2">
            <Link
              href="/schedule"
              className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Book a class
            </Link>
            <Link
              href="/packages"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100"
            >
              Buy credits
            </Link>
          </div>
        </div>

        {/* Beatbike Logo and How Many Classes You've Taken So Far - taken 5 classes so far */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className={`${proximaNovaSemibold.className} mt-2 text-4xl`}>
              5
            </p>
            <p className={`${proximaNovaRegular.className} tracking-wide mt-1 text-sm text-zinc-500`}>Classes Completed</p>
          </div>


          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 sm:col-span-2">
            <p className="text-sm text-zinc-500">Membership / Package</p>
            <p className="mt-2 text-lg font-medium">No active membership</p>
            <p className="mt-1 text-sm text-zinc-500">
              Grab a pack to start booking.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/packages"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                View packages
              </Link>
              <Link
                href="/my-classes"
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100"
              >
                My classes
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming */}
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Upcoming reservations</h2>
            <Link href="/my-classes" className="text-sm font-medium underline">
              View all
            </Link>
          </div>

          {/* {upcomingBookings.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-600">
              You don’t have any upcoming reservations yet.
              <div className="mt-3">
                <Link
                  href="/schedule"
                  className="inline-flex rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Book your first class
                </Link>
              </div>
            </div>
          ) : (
            <ul className="mt-4 divide-y divide-zinc-100">
              <div>No upcoming bookings</div>
              {upcomingBookings.map((b) => {
                const s = b.classSession;
                return (
                  <li key={b.id} className="py-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium">
                          {s.classType.name} · {s.studio.name}
                        </p>
                        <p className="text-sm text-zinc-500">
                          Instructor: {s.instructor.name}
                        </p>
                      </div>

                      <div className="text-sm text-zinc-600">
                        {new Date(s.startsAt).toLocaleString()}
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Link
                        href={`/reservations/${b.id}`}
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium hover:bg-zinc-100"
                      >
                        Details
                      </Link>
                      <Link
                        href={`/reservations/${b.id}/cancel`}
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium hover:bg-zinc-100"
                      >
                        Cancel
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  );
}
