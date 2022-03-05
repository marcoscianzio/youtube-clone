/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `Video` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `video` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Video_createdAt_key` ON `Video`(`createdAt`);
