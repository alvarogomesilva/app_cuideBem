/*
  Warnings:

  - You are about to alter the column `hour` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `hour` DATETIME(3) NOT NULL;