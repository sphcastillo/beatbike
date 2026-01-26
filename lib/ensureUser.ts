import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

type EnsureUserResult = {
  user: {
    id: string;
    clerkId: string;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
  };
  isNewUser: boolean;
};

export async function ensureUser(): Promise<EnsureUserResult> {
  const { userId } = await auth();
  const clerkUser = await currentUser();

  if (!userId || !clerkUser) {
    throw new Error("UNAUTHORIZED");
  }

  const primaryEmail =
    clerkUser.emailAddresses.find((e) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress ??
    clerkUser.emailAddresses[0]?.emailAddress ??
    null;


  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {
      email: primaryEmail,
      firstName: clerkUser.firstName ?? null,
      lastName: clerkUser.lastName ?? null,
    },
    create: {
      clerkId: userId,
      email: primaryEmail,
      firstName: clerkUser.firstName ?? null,
      lastName: clerkUser.lastName ?? null,
    },
    select: {
      id: true,
      clerkId: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });


  const hasLedger = await prisma.creditsLedger.findFirst({
    where: { userId: user.id },
    select: { id: true },
  });

  const isNewUser = !hasLedger;

  if (!hasLedger) {
    await prisma.creditsLedger.create({
      data: {
        userId: user.id,
        delta: 3,
        reason: "WELCOME_3",
      },
    });
  }

  return { user, isNewUser };
}
