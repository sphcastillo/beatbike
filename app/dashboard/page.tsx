import { ensureUser } from "@/lib/ensureUser";
import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold, proximaNovaLight } from "@/app/fonts";
import { cancelBooking } from "@/actions/cancelBooking";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
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
  const cancelStatusRaw = searchParams?.cancel;
  const cancelStatus = Array.isArray(cancelStatusRaw) ? cancelStatusRaw[0] : cancelStatusRaw;

  return (
    <div className="min-h-screen bg-zinc-50 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {cancelStatus === "tooLate" ? (
          <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
            <p className={`${proximaNovaMedium.className} text-sm`}>
              Cancellation couldn’t be completed.
            </p>
            <p className={`${proximaNovaLight.className} mt-1 text-sm`}>
              Cancellations are only allowed up to <span className={`${proximaNovaMedium.className}`}>12 hours</span> before class start time.
            </p>
            <div className="mt-2">
              <Link href="/dashboard" className={`${proximaNovaRegular.className} text-xs uppercase tracking-wide underline`}>
                Dismiss
              </Link>
            </div>
          </div>
        ) : null}

        {cancelStatus === "success" ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
            <p className={`${proximaNovaMedium.className} text-sm`}>Reservation canceled.</p>
            <div className="mt-2">
              <Link href="/dashboard" className={`${proximaNovaRegular.className} text-xs uppercase tracking-wide underline`}>
                Dismiss
              </Link>
            </div>
          </div>
        ) : null}

        {/* Header */}
        <div className=" mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className={`${proximaNovaSemibold.className} text-4xl`}>
              0
            </p>
            <p className={`${proximaNovaRegular.className} tracking-wide mt-1 text-sm text-zinc-500`}>Classes Completed</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
            <p className={`${proximaNovaSemibold.className} text-4xl`}>
              {upcomingBookings.length}
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
                <p className={`${proximaNovaMedium.className} mt-2 text-lg tracking-tight`}>{credits} Active</p>
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
                const startsAt = new Date(s.startsAt);
                const weekday = startsAt.toLocaleDateString(undefined, { weekday: "long" });
                const date = startsAt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
                const time = startsAt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
                return (
                  <li key={b.id} className="py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-200">
                          {s.instructor?.imageUrl ? (
                            <Image
                              src={s.instructor.imageUrl}
                              alt={s.instructor.name ? `${s.instructor.name} profile photo` : "Instructor photo"}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          ) : null}
                        </div>

                        <div className="min-w-0">
                          <p className={`${proximaNovaMedium.className} truncate text-sm text-zinc-900`}>
                            {s.classType.name} · {s.studio.name}
                          </p>
                          <p className={`${proximaNovaLight.className} truncate text-sm text-zinc-500`}>
                            {s.instructor?.name ? s.instructor.name : "Instructor TBA"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className={`${proximaNovaRegular.className} text-sm text-zinc-700`}>
                            {weekday}, {date}
                          </div>
                          <div className={`${proximaNovaLight.className} text-sm text-zinc-600`}>
                            {time}
                          </div>
                        </div>

                        <form action={cancelBooking}>
                          <input type="hidden" name="bookingId" value={b.id} />
                          <button
                            type="submit"
                            className={`${proximaNovaRegular.className} inline-flex items-center border border-zinc-200 bg-white px-3 py-1.5 text-xs uppercase tracking-wide text-zinc-900 hover:border-[#DFFF00] hover:bg-zinc-50 active:border-[#DFFF00]`}
                          >
                            Cancel
                          </button>
                        </form>
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
