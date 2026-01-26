import { ensureUser } from "@/lib/ensureUser";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold, proximaNovaLight } from "@/app/fonts";

export default async function DashboardPage() {
  const { user } = await ensureUser();

  const firstName = user.firstName ?? "there";

  const creditsAgg = await prisma.creditsLedger.aggregate({
    where: { userId: user.id },
    _sum: { delta: true },
  });
  const credits = creditsAgg._sum.delta ?? 0;

  const upcomingBookings = await prisma.booking.findMany({
    where: {
      userId: user.id,
      status: "BOOKED",
      class: { startsAt: { gte: new Date() } },
    },
    orderBy: { class: { startsAt: "asc" } },
    take: 5,
    include: {
      class: {
        include: { studio: true, instructor: true, classType: true },
      },
    },
  });

  const hasUpcomingReservations = upcomingBookings.length > 0;

  return (
    <div className="min-h-screen bg-zinc-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className={`${proximaNovaSemibold.className} text-3xl tracking-tight`}>Welcome back, {firstName}</h1>
          </div>

          <div className="flex gap-4">
            <Link
              href="/select-studio"
              className={`${proximaNovaRegular.className} bg-[#DFFF00] hover:bg-black hover:text-[#B0DB00] px-4 py-2 text-sm uppercase tracking-wide text-black hover:opacity-90`}
            >
              Book a class
            </Link>
            <Link
              href="/buy-now"
              className={`${proximaNovaRegular.className} bg-black text-white hover:bg-[#B0DB00] hover:text-black px-4 py-2 text-sm uppercase tracking-wide`}
            >
              Buy now
            </Link>
          </div>
        </div>

        {/* <nav aria-label="Dashboard sections" className="">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <li>
              <Link
                href="#reservations"
                className={`${proximaNovaRegular.className} block rounded-xl px-3 py-2 text-sm uppercase tracking-wide hover:bg-zinc-100`}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                href="#memberships-credits"
                className={`${proximaNovaRegular.className} block rounded-xl px-3 py-2 text-sm uppercase tracking-wide hover:bg-zinc-100`}
              >
                Memberships &amp; Credits
              </Link>
            </li>
            <li>
              <Link
                href="#purchases"
                className={`${proximaNovaRegular.className} block rounded-xl px-3 py-2 text-sm uppercase tracking-wide hover:bg-zinc-100`}
              >
                Purchases
              </Link>
            </li>
            <li>
              <Link
                href="#personal-info"
                className={`${proximaNovaRegular.className} block rounded-xl px-3 py-2 text-sm uppercase tracking-wide hover:bg-zinc-100`}
              >
                Personal Information
              </Link>
            </li>
          </ul>
        </nav> */}

        {/* Beatbike Logo and How Many Classes You've Taken So Far - taken 5 classes so far */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className={`${proximaNovaSemibold.className} text-4xl`}>
              5
            </p>
            <p className={`${proximaNovaRegular.className} tracking-wide mt-1 text-sm text-zinc-500`}>Classes Completed</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className={`${proximaNovaSemibold.className} text-4xl`}>
              0
            </p>
            <p className={`${proximaNovaRegular.className} tracking-wide mt-1 text-sm text-zinc-500`}>Upcoming Classes</p>
          </div>

          <div  
            id="memberships-credits"
            className="col-span-2 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200 sm:col-span-2 "
          >
            <div className="flex items-start justify-between gap-6">
            <div className="min-w-0 text-right">
                <p className={`${proximaNovaRegular.className} uppercase text-sm tracking-wide text-zinc-700`}>Credits</p>
                <p className={`${proximaNovaMedium.className} mt-2 text-lg tracking-tight`}>3 Active</p>
              </div>
              <div className="min-w-0">
                <p className={`${proximaNovaRegular.className} uppercase text-sm tracking-wide text-zinc-700`}>Membership</p>
                <p className={`${proximaNovaMedium.className} mt-2 text-lg tracking-tight`}>No Active</p>
              </div>
            </div>

            {/* <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/packages"
                className={`${proximaNovaRegular.className} uppercase rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:opacity-90`}
              >
                View packages
              </Link>
              <Link
                href="/my-classes"
                className={`${proximaNovaRegular.className} uppercase rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm hover:bg-zinc-100`}
              >
                My classes
              </Link>
            </div> */}
          </div>
        </div>

        {/* Upcoming */}
        <div id="reservations" className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
          <div className="flex items-center justify-between">
            <h2 className={`${proximaNovaMedium.className} uppercase text-lg`}>Upcoming reservations</h2>
            {hasUpcomingReservations ? (
              <Link href="/my-classes" className={`${proximaNovaRegular.className} tracking-wide uppercase text-sm underline`}>
                View all
              </Link>
            ) : (
              <Link href="/select-studio" className={`${proximaNovaRegular.className} tracking-wide uppercase text-sm underline`}>
                
              </Link>
            )}
          </div>

          {!hasUpcomingReservations ? (
            <div className={`${proximaNovaLight.className} mt-4 rounded-xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-600`}>
              You don’t have any upcoming reservations yet.
              <div className="mt-3">
                <Link
                  href="/select-studio"
                  className={`${proximaNovaRegular.className} inline-flex bg-black px-4 py-2 text-sm uppercase tracking-wide text-white hover:bg-[#B0DB00] hover:text-black`}
                >
                  Reserve now
                </Link>
              </div>
            </div>
          ) : (
            <ul className="mt-4 divide-y divide-zinc-100">
              {upcomingBookings.map((b) => {
                const s = b.class;
                return (
                  <li key={b.id} className="py-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className={`${proximaNovaMedium.className} text-sm text-zinc-900`}>
                          {s.classType.name} · {s.studio.name}
                        </p>
                        {s.instructor?.name ? (
                          <p className={`${proximaNovaLight.className} text-sm text-zinc-500`}>
                            Instructor: {s.instructor.name}
                          </p>
                        ) : null}
                      </div>

                      <div className={`${proximaNovaRegular.className} text-sm text-zinc-600`}>
                        {new Date(s.startsAt).toLocaleString()}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Purchases */}
        <div id="purchases" className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
          <div className="flex items-center justify-between">
            <h2 className={`${proximaNovaMedium.className} uppercase text-lg`}>Purchases</h2>
            <Link href="/my-purchases" className={`hidden ${proximaNovaRegular.className} tracking-wide uppercase text-sm underline`}>
              View all
            </Link>
          </div>
          <div className={`${proximaNovaLight.className} mt-4 rounded-xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-600`}>
            You don’t have any purchases yet.
            <div className="mt-3">
                <Link
                  href="/buy-now"
                  className={`${proximaNovaRegular.className} inline-flex bg-black px-4 py-2 text-sm uppercase tracking-wide text-white hover:bg-[#B0DB00] hover:text-black`}
                >
                  Buy now
                </Link>
              </div>
          </div>
          
        </div>

        {/* Personal Information */}
        <div id="personal-info" className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
          <h2 className={`${proximaNovaMedium.className} uppercase text-lg`}>Personal Information</h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <dt className={`${proximaNovaRegular.className} text-xs uppercase tracking-wide text-zinc-500`}>Name</dt>
              <dd className={`${proximaNovaMedium.className} mt-1 text-sm text-zinc-900`}>
                {[user.firstName, user.lastName].filter(Boolean).join(" ") || "—"}
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <dt className={`${proximaNovaRegular.className} text-xs uppercase tracking-wide text-zinc-500`}>Email</dt>
              <dd className={`${proximaNovaMedium.className} mt-1 text-sm text-zinc-900`}>{user.email || "—"}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
