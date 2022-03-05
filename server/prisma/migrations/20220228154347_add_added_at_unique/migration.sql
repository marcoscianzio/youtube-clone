/*
  Warnings:

  - A unique constraint covering the columns `[addedAt]` on the table `SeeLater` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `SeeLater_addedAt_key` ON `SeeLater`(`addedAt`);
