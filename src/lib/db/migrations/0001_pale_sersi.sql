ALTER TABLE `oauth` MODIFY COLUMN `state` varchar(200);--> statement-breakpoint
ALTER TABLE `oauth` MODIFY COLUMN `code` varchar(200);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `firstname` varchar(200);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `lastname` varchar(200);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `email` varchar(200);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `googleId` varchar(200);--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `name` varchar(200);--> statement-breakpoint
ALTER TABLE `users` ADD `avatar` varchar(400);