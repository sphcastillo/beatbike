/*
  Warnings:

  - You are about to drop the column `guestEmail` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `guestName` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `hasReceivedFreeCredits` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `hasUsedNewClientOffer` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `CheckIn` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreditLedgerEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MembershipCycle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Purchase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserMembership` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_classId_fkey";

-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_userId_fkey";

-- DropForeignKey
ALTER TABLE "CreditLedgerEntry" DROP CONSTRAINT "CreditLedgerEntry_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "CreditLedgerEntry" DROP CONSTRAINT "CreditLedgerEntry_cycleId_fkey";

-- DropForeignKey
ALTER TABLE "CreditLedgerEntry" DROP CONSTRAINT "CreditLedgerEntry_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "CreditLedgerEntry" DROP CONSTRAINT "CreditLedgerEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "MembershipCycle" DROP CONSTRAINT "MembershipCycle_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_productId_fkey";

-- DropForeignKey
ALTER TABLE "Purchase" DROP CONSTRAINT "Purchase_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserMembership" DROP CONSTRAINT "UserMembership_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "UserMembership" DROP CONSTRAINT "UserMembership_userId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "guestEmail",
DROP COLUMN "guestName";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "hasReceivedFreeCredits",
DROP COLUMN "hasUsedNewClientOffer";

-- DropTable
DROP TABLE "CheckIn";

-- DropTable
DROP TABLE "CreditLedgerEntry";

-- DropTable
DROP TABLE "MembershipCycle";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Purchase";

-- DropTable
DROP TABLE "UserMembership";

-- DropEnum
DROP TYPE "LedgerEntryType";

-- DropEnum
DROP TYPE "MembershipStatus";

-- DropEnum
DROP TYPE "MembershipTier";

-- DropEnum
DROP TYPE "ProductType";

-- DropEnum
DROP TYPE "PurchaseStatus";

-- CreateTable
CREATE TABLE "CreditsLedger" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "delta" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "bookingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CreditsLedger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CreditsLedger_userId_idx" ON "CreditsLedger"("userId");

-- CreateIndex
CREATE INDEX "CreditsLedger_bookingId_idx" ON "CreditsLedger"("bookingId");

-- AddForeignKey
ALTER TABLE "CreditsLedger" ADD CONSTRAINT "CreditsLedger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditsLedger" ADD CONSTRAINT "CreditsLedger_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;
