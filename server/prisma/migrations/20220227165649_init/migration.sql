-- CreateTable
CREATE TABLE `User` (
    `githubId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `subscribers` INTEGER NOT NULL DEFAULT 0,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `description` TEXT NULL,
    `pic` TEXT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`githubId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
