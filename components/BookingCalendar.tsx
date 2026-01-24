"use client";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaLight } from "@/app/fonts";
import { useMemo, useState } from "react";

type Session = {
  id: string;
  startsAt: string;
  endsAt: string;
  capacity: number;
  instructor: { name: string; imageUrl: string | null } | null;
  classType: { name: string; durationMin: number };
};

type DayCell = {
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0);
}

function weekdayMonFirst(d: Date) {
  const js = d.getDay(); // 0=Sun
  return (js + 6) % 7;   // 0=Mon
}

function addDays(d: Date, amount: number) {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function addMonths(d: Date, amount: number) {
  return new Date(d.getFullYear(), d.getMonth() + amount, 1);
}

function formatMonthYear(d: Date) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(d);
}

function formatLongDate(iso: string) {
  const [y, m, day] = iso.split("-").map(Number);
  const d = new Date(y, m - 1, day);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(d);
}

function buildMonthGrid(viewDate: Date, selectedISO: string): DayCell[] {
  const todayISO = toISODate(new Date());
  const monthStart = startOfMonth(viewDate);
  const monthEnd = endOfMonth(viewDate);

  const gridStart = addDays(monthStart, -weekdayMonFirst(monthStart));
  const gridEnd = addDays(monthEnd, 6 - weekdayMonFirst(monthEnd));

  const days: DayCell[] = [];
  for (let d = new Date(gridStart); d <= gridEnd; d = addDays(d, 1)) {
    const iso = toISODate(d);
    days.push({
      date: iso,
      isCurrentMonth: d.getMonth() === viewDate.getMonth(),
      isToday: iso === todayISO,
      isSelected: iso === selectedISO,
    });
  }
  return days;
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function BookingCalendar({
  sessions,
  onBook,
}: {
  sessions: Session[];
  onBook: (sessionId: string) => void;
}) {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(() => startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState(() => toISODate(today));

  const days = useMemo(() => buildMonthGrid(viewDate, selectedDate), [viewDate, selectedDate]);

  const sessionsForSelectedDay = useMemo(() => {
    return sessions
      .filter((s) => toISODate(new Date(s.startsAt)) === selectedDate)
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  }, [sessions, selectedDate]);

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 w-full max-w-5xl">
      {/* Calendar */}
      <div className="md:pr-14">
        <div className="flex items-center">
          <h2 className="flex-auto text-md text-gray-900 uppercase tracking-wide">
            {formatMonthYear(viewDate)}
          </h2>

          <button
            type="button"
            onClick={() => setViewDate((d) => addMonths(d, -1))}
            className="p-1.5 text-gray-400 hover:text-gray-500"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => setViewDate((d) => addMonths(d, 1))}
            className="ml-2 p-1.5 text-gray-400 hover:text-gray-500"
          >
            ›
          </button>
        </div>

        <div className="mt-8 grid grid-cols-7 text-center text-xs text-gray-500">
          <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
        </div>

        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, idx) => (
            <div key={day.date} className={cx(idx > 6 && "border-t border-gray-200", "py-2")}>
              <button
                type="button"
                onClick={() => setSelectedDate(day.date)}
                className={cx(
                  day.isSelected && "text-white bg-gray-900",
                  !day.isSelected && day.isToday && "text-[#B0DB00]",
                  !day.isSelected && !day.isToday && day.isCurrentMonth && "text-gray-900",
                  !day.isSelected && !day.isToday && !day.isCurrentMonth && "text-gray-400",
                  !day.isSelected && "hover:bg-gray-200",
                  (day.isSelected || day.isToday) && "font-semibold",
                  "mx-auto flex size-8 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={day.date}>{day.date.split("-").pop()!.replace(/^0/, "")}</time>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Day schedule */}
      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className={`${proximaNovaMedium.className} uppercase tracking-wide text-pretty text-lg pb-4 text-gray-900`}>
          Schedule for <time dateTime={selectedDate}>{formatLongDate(selectedDate)}</time>
        </h2>

        {sessionsForSelectedDay.map((s) => {
          const now = new Date();
          const starts = new Date(s.startsAt);
          const hasStarted = starts.getTime() <= now.getTime();

          return (
            <li
              key={s.id}
              className={cx(
                "rounded-xl border px-4 py-3 my-2 flex items-center justify-between gap-4",
                hasStarted && "opacity-60"
              )}
            >
              <div>
                <div className={`${proximaNovaMedium.className} uppercase tracking-wide text-sm text-gray-900`}>
                  {s.classType.name} • {formatTime(s.startsAt)} – {formatTime(s.endsAt)}
                </div>

                <div className={`${proximaNovaRegular.className} tracking-wide mt-1 text-sm text-gray-500`}>
                  Instructor: {s.instructor?.name ?? "TBD"}
                </div>

                {hasStarted && (
                  <div className="mt-1 text-xs text-gray-500 uppercase tracking-wide">
                    Class already started
                  </div>
                )}
              </div>

              <button
                type="button"
                disabled={hasStarted}
                className={cx(
                  proximaNovaMedium.className,
                  "uppercase tracking-wider rounded-lg px-4 py-2 text-sm",
                  hasStarted
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-[#B0DB00] hover:text-gray-700"
                )}
                onClick={() => {
                  if (hasStarted) return;
                  onBook(s.id);
                }}
              >
                {hasStarted ? "Closed" : "Book"}
              </button>
            </li>
          );
        })}

      </section>
    </div>
  );
}
