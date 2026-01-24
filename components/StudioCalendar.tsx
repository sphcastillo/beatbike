'use client'

import { useMemo, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { proximaNovaThin ,proximaNovaLight, proximaNovaRegular, proximaNovaMedium, proximaNovaSemibold } from "@/app/fonts";
import Image from 'next/image';
import calendarJoe from "@/images/calendarJoe.jpg";

type DayCell = {
  date: string 
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
}

const meetings = [
  {
    id: 1,
    name: 'Joel S.',
    imageSrc: calendarJoe,
    start: '1:00 PM',
    startDatetime: '2026-01-21T13:00',
    end: '2:30 PM',
    endDatetime: '2026-01-21T14:30',
  },
]

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

function toISODate(d: Date) {

  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0)
}


function weekdayMonFirst(d: Date) {
  const js = d.getDay() 
  return (js + 6) % 7
}

function addDays(d: Date, amount: number) {
  const copy = new Date(d)
  copy.setDate(copy.getDate() + amount)
  return copy
}

function addMonths(d: Date, amount: number) {
  return new Date(d.getFullYear(), d.getMonth() + amount, 1)
}

function formatMonthYear(d: Date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(d)
}

function formatLongDate(iso: string) {
  const [y, m, day] = iso.split('-').map(Number)
  const d = new Date(y, m - 1, day)
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(d)
}

function buildMonthGrid(viewDate: Date, selectedISO: string): DayCell[] {
  const todayISO = toISODate(new Date())

  const monthStart = startOfMonth(viewDate)
  const monthEnd = endOfMonth(viewDate)

  const gridStart = addDays(monthStart, -weekdayMonFirst(monthStart))

  const gridEnd = addDays(monthEnd, 6 - weekdayMonFirst(monthEnd))

  const days: DayCell[] = []
  for (let d = new Date(gridStart); d <= gridEnd; d = addDays(d, 1)) {
    const iso = toISODate(d)
    days.push({
      date: iso,
      isCurrentMonth: d.getMonth() === viewDate.getMonth(),
      isToday: iso === todayISO,
      isSelected: iso === selectedISO,
    })
  }
  return days
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ')
}

export default function StudioCalendar() {
  const today = useMemo(() => new Date(), [])
  const [viewDate, setViewDate] = useState(() => startOfMonth(today))
  const [selectedDate, setSelectedDate] = useState(() => toISODate(today))

  const days = useMemo(() => buildMonthGrid(viewDate, selectedDate), [viewDate, selectedDate])

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <div className="md:pr-14">
        <div className="flex items-center">
          <h2 className={`${proximaNovaRegular.className} tracking-wide uppercase flex-auto text-md text-gray-900`}>{formatMonthYear(viewDate)}</h2>

          <button
            type="button"
            onClick={() => setViewDate((d) => addMonths(d, -1))}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setViewDate((d) => addMonths(d, 1))}
            className={`${proximaNovaRegular.className} -my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500`}
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className={`${proximaNovaRegular.className} mt-10 grid grid-cols-7 text-center text-xs/6 text-gray-600`}>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>

        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div key={day.date} className={cx(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
              <button
                type="button"
                onClick={() => setSelectedDate(day.date)}
                className={cx(
                  // base
                  'mx-auto flex size-8 items-center justify-center rounded-full',
                
                  // selected states
                  day.isSelected && day.isToday && 'bg-green-600 text-white',
                  day.isSelected && !day.isToday && 'bg-gray-900 text-white',
                
                  // today (not selected)
                  !day.isSelected && day.isToday && 'text-yellow-600',
                
                  // normal days
                  !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                  !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                
                  // hover
                  !day.isSelected && 'hover:bg-gray-200',
                
                  // emphasis
                  (day.isSelected || day.isToday) && 'font-semibold'
                )}
                
              >
                <time dateTime={day.date}>{day.date.split('-').pop()!.replace(/^0/, '')}</time>
              </button>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className={`${proximaNovaRegular.className} uppercase tracking-wide text-base text-gray-900`}>
          Schedule for <time dateTime={selectedDate}>{formatLongDate(selectedDate)}</time>
        </h2>

        <ol className="mt-4 flex flex-col gap-y-1 text-sm/6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center gap-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <Image src={meeting.imageSrc} alt="" className="size-10 flex-none rounded-full" width={40} height={40} />
              <div className="flex-auto">
                <p className={`${proximaNovaRegular.className} text-gray-900 tracking-wider`}>{meeting.name}</p>
                <p className={`${proximaNovaRegular.className} mt-0.5`}>
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                  <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>

              <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                <div>
                  <MenuButton className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="size-6" aria-hidden="true" />
                  </MenuButton>
                </div>

                <MenuItems className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Cancel
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
