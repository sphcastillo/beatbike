"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { ensureUser } from "@/lib/ensureUser";

export async function cancelBooking(formData: FormData) {
  const bookingId = String(formData.get("bookingId") || "");
  if (!bookingId) redirect("/dashboard?cancel=error");

  const { user } = await ensureUser();

  const outcome = await prisma.$transaction(async (tx) => {
    const booking = await tx.booking.findUnique({
      where: { id: bookingId },
      select: {
        id: true,
        userId: true,
        status: true,
        class: { select: { startsAt: true } },
      },
    });

    if (!booking) return "notFound" as const;
    if (booking.userId !== user.id) return "unauthorized" as const;
    if (booking.status !== "BOOKED") return "notBooked" as const;

    // Cancellation allowed only until 12 hours before class start
    const startsAtMs = booking.class.startsAt.getTime();
    const cancelDeadlineMs = startsAtMs - 12 * 60 * 60 * 1000;
    if (Date.now() > cancelDeadlineMs) return "tooLate" as const;

    await tx.booking.update({
      where: { id: bookingId },
      data: { status: "CANCELED" },
    });

    // Refund one credit on cancellation (mirrors booking credit consumption)
    await tx.creditsLedger.create({
      data: {
        userId: user.id,
        delta: 1,
        reason: "CANCEL",
        bookingId: bookingId,
      },
    });

    return "canceled" as const;
  });

  revalidatePath("/dashboard");

  if (outcome === "tooLate") redirect("/dashboard?cancel=tooLate");
  if (outcome === "canceled") redirect("/dashboard?cancel=success");
  redirect("/dashboard?cancel=error");
}

