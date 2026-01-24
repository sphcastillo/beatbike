/*
  Warnings:

  - You are about to drop the column `description` on the `ClassSession` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ClassSession` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studioId,startsAt,classTypeId]` on the table `ClassSession` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Instructor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Studio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `classTypeId` to the `ClassSession` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClassModality" AS ENUM ('CYCLE');

-- AlterTable
ALTER TABLE "ClassSession" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "classTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "StudioInstructor" (
    "studioId" TEXT NOT NULL,
    "instructorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StudioInstructor_pkey" PRIMARY KEY ("studioId","instructorId")
);

-- CreateTable
CREATE TABLE "ClassType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "modality" "ClassModality" NOT NULL,
    "durationMin" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StudioInstructor_instructorId_idx" ON "StudioInstructor"("instructorId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassType_name_key" ON "ClassType"("name");

-- CreateIndex
CREATE INDEX "ClassSession_classTypeId_idx" ON "ClassSession"("classTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassSession_studioId_startsAt_classTypeId_key" ON "ClassSession"("studioId", "startsAt", "classTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_name_key" ON "Instructor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Studio_name_key" ON "Studio"("name");

-- AddForeignKey
ALTER TABLE "StudioInstructor" ADD CONSTRAINT "StudioInstructor_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "Studio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudioInstructor" ADD CONSTRAINT "StudioInstructor_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSession" ADD CONSTRAINT "ClassSession_classTypeId_fkey" FOREIGN KEY ("classTypeId") REFERENCES "ClassType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
