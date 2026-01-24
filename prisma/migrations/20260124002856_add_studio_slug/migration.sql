/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Studio` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Studio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Studio" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Studio_slug_key" ON "Studio"("slug");
