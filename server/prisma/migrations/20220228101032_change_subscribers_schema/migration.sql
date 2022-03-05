/*
  Warnings:

  - You are about to drop the `subscribes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `subscribes` DROP FOREIGN KEY `Subscribes_subscribedId_fkey`;

-- DropForeignKey
ALTER TABLE `subscribes` DROP FOREIGN KEY `Subscribes_subscriberId_fkey`;

-- DropTable
DROP TABLE `subscribes`;

-- CreateTable
CREATE TABLE `_UserSubscribes` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserSubscribes_AB_unique`(`A`, `B`),
    INDEX `_UserSubscribes_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserSubscribes` ADD FOREIGN KEY (`A`) REFERENCES `User`(`githubId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserSubscribes` ADD FOREIGN KEY (`B`) REFERENCES `User`(`githubId`) ON DELETE CASCADE ON UPDATE CASCADE;
