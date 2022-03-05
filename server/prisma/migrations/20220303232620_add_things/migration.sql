/*
  Warnings:

  - You are about to drop the `history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `seelater` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username,createdAt]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[createdAt]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `vote` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `history` DROP FOREIGN KEY `History_userId_fkey`;

-- DropForeignKey
ALTER TABLE `history` DROP FOREIGN KEY `History_videoId_fkey`;

-- DropForeignKey
ALTER TABLE `seelater` DROP FOREIGN KEY `SeeLater_userId_fkey`;

-- DropForeignKey
ALTER TABLE `seelater` DROP FOREIGN KEY `SeeLater_videoId_fkey`;

-- DropForeignKey
ALTER TABLE `vote` DROP FOREIGN KEY `Vote_userId_fkey`;

-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `vote` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `history`;

-- DropTable
DROP TABLE `seelater`;

-- CreateTable
CREATE TABLE `_UserHistory` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserHistory_AB_unique`(`A`, `B`),
    INDEX `_UserHistory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserSeeLater` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserSeeLater_AB_unique`(`A`, `B`),
    INDEX `_UserSeeLater_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_username_createdAt_key` ON `User`(`username`, `createdAt`);

-- CreateIndex
CREATE UNIQUE INDEX `Vote_createdAt_key` ON `Vote`(`createdAt`);

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`githubId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserHistory` ADD FOREIGN KEY (`A`) REFERENCES `User`(`githubId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserHistory` ADD FOREIGN KEY (`B`) REFERENCES `Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSeeLater` ADD FOREIGN KEY (`A`) REFERENCES `User`(`githubId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSeeLater` ADD FOREIGN KEY (`B`) REFERENCES `Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
