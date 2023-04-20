/*
  Warnings:

  - Made the column `favorite` on table `Affirmations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Affirmations` MODIFY `favorite` BOOLEAN NOT NULL;
