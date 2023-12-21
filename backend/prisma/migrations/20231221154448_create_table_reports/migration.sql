/*
  Warnings:

  - Made the column `user_id` on table `patients` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `patients_user_id_fkey`;

-- AlterTable
ALTER TABLE `patients` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `reports` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `inital_date` DATE NOT NULL,
    `final_date` DATE NOT NULL,
    `description` TEXT NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `reports_patient_id_key`(`patient_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `patients` ADD CONSTRAINT `patients_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reports` ADD CONSTRAINT `reports_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `patients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
