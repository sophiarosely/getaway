/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Habits` DROP FOREIGN KEY `Habits_user_id_fkey`;

-- AlterTable
ALTER TABLE `Habits` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_googleId_key` ON `User`(`googleId`);

-- AddForeignKey
ALTER TABLE `Habits` ADD CONSTRAINT `Habits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`googleId`) ON DELETE RESTRICT ON UPDATE CASCADE;
