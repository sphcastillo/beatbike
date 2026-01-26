"use client";
import { useState, useTransition } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { bookClass } from "@/actions/bookClass";
import { useRouter } from "next/navigation";


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
  bookedSessionIds = [],
}: {
  studioId: string;
  sessions: Session[];
  bookedSessionIds?: string[];
}) {
  const [isPending, startTransition] = useTransition();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const router = useRouter();
  
  const handleBook = (sessionId: string) => {
    setLoadingId(sessionId);

    startTransition(async () => {
      const res = await bookClass(sessionId);

      setLoadingId(null);

      if (!res.ok) {
        alert(res.error);
        return;
      }

      router.push("/dashboard");
    });
  };

  return (
    <BookingCalendar
      sessions={sessions}
      onBook={handleBook}
      isPending={isPending}
      loadingId={loadingId}
      bookedSessionIds={bookedSessionIds}
    />
  );
}
