/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateAt` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Comment_createdAt_key` ON `Comment`(`createdAt`);
