/*
  Warnings:

  - You are about to drop the column `date` on the `dailys` table. All the data in the column will be lost.
  - Added the required column `date_initial` to the `dailys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_date` to the `dailys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `dailys` DROP COLUMN `date`,
    ADD COLUMN `date_initial` DATETIME(3) NOT NULL,
    ADD COLUMN `final_date` DATETIME(3) NOT NULL;
