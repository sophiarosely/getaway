-- CreateTable
CREATE TABLE `Mood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mood_color` VARCHAR(191) NOT NULL,
    `mood_desc` VARCHAR(191) NOT NULL,
    `mood_createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MoodsOfUsers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mood_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MoodsOfUsers` ADD CONSTRAINT `MoodsOfUsers_mood_id_fkey` FOREIGN KEY (`mood_id`) REFERENCES `Mood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MoodsOfUsers` ADD CONSTRAINT `MoodsOfUsers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
