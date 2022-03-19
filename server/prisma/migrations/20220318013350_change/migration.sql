/*
  Warnings:

  - You are about to drop the `_userhistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_userhistory` DROP FOREIGN KEY `_userhistory_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_userhistory` DROP FOREIGN KEY `_userhistory_ibfk_2`;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `banner` DROP DEFAULT;

-- DropTable
DROP TABLE `_userhistory`;

-- CreateTable
CREATE TABLE `History` (
    `videoId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `addedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `History_addedAt_key`(`addedAt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`githubId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `Video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
