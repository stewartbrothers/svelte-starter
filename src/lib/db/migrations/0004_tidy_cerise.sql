ALTER TABLE `users` ADD `key` varchar(100);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_key_unique` UNIQUE(`key`);