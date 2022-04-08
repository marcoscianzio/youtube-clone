/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `History` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX `Comment_createdAt_key` ON `comment`;

-- DropIndex
DROP INDEX `History_addedAt_key` ON `history`;

-- DropIndex
DROP INDEX `User_username_createdAt_key` ON `user`;

-- DropIndex
DROP INDEX `Video_createdAt_key` ON `video`;

-- DropIndex
DROP INDEX `Vote_createdAt_key` ON `vote`;

-- AlterTable
ALTER TABLE `history` ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
