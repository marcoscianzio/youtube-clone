-- DropIndex
DROP INDEX `Video_createdAt_idx` ON `video`;

-- AlterTable
ALTER TABLE `video` MODIFY `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
