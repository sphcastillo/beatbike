"use server";

import prisma from "@/lib/prisma";
import { ensureUser } from "@/lib/ensureUser";

export async function bookClass(sessionId: string) {
  if (!sessionId) {
    return { ok: false as const, error: "Missing session id" };
  }

  try {
    const { user } = await ensureUser();

    const result = await prisma.$transaction(async (tx) => {
      const session = await tx.classSession.findUnique({
        where: { id: sessionId },
        select: { id: true, startsAt: true, capacity: true },
      });

      if (!session) return { ok: false as const, error: "Session not found" };
      if (session.startsAt.getTime() <= Date.now())
        return { ok: false as const, error: "Class already started" };

      // prevent duplicate booking
      const existing = await tx.booking.findUnique({
        where: { userId_classId: { userId: user.id, classId: sessionId } },
        select: { id: true, status: true },
      });

      if (existing?.status === "BOOKED") {
        return { ok: false as const, error: "Already booked" };
      }

      // credits check
      const creditsAgg = await tx.creditsLedger.aggregate({
        where: { userId: user.id },
        _sum: { delta: true },
      });
      const credits = creditsAgg._sum.delta ?? 0;
      if (credits < 1) return { ok: false as const, error: "Insufficient credits" };

      // create or restore booking
      const booking = existing
        ? await tx.booking.update({
            where: { id: existing.id },
            data: { status: "BOOKED" },
            select: { id: true },
          })
        : await tx.booking.create({
            data: { userId: user.id, classId: sessionId, status: "BOOKED" },
            select: { id: true },
          });

      // consume credit
      await tx.creditsLedger.create({
        data: {
          userId: user.id,
          delta: -1,
          reason: "BOOKING",
          bookingId: booking.id,
        },
      });

      return { ok: true as const, bookingId: booking.id };
    });

    return result;
  } catch (e: any) {
    // unique constraint race protection
    if (e?.code === "P2002") {
      return { ok: false as const, error: "Already booked" };
    }
    console.error(e);
    return { ok: false as const, error: "Server error" };
  }
}
