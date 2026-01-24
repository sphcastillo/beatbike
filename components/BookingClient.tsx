"use client";

import BookingCalendar from "@/components/BookingCalendar";

type Session = {
  id: string;
  startsAt: string;
  endsAt: string;
  capacity: number;
  instructor: { name: string; imageUrl: string | null } | null;
  classType: { name: string; durationMin: number };
};

export default function BookingClient({
  studioId,
  sessions,
}: {
  studioId: string;
  sessions: Session[];
}) {
  const handleBook = (sessionId: string) => {
    // placeholder for now
    console.log("book", { sessionId, studioId });

    // later: call an API route or server action here
  };

  return <BookingCalendar sessions={sessions} onBook={handleBook} />;
}
