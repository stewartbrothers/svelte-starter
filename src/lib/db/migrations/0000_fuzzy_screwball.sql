CREATE TABLE `content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` text,
	`status` enum('Usable','Retired'),
	`created_at` timestamp DEFAULT (now()),
	`updatedAt` timestamp,
	`tags` json,
	`thumbnail` varchar(400),
	`description` varchar(500),
	`code` varchar(100),
	`url` varchar(300),
	`time` time,
	`hasOverlays` boolean,
	`version` int,
	`category` varchar(100),
	`ratio` json,
	`fileFormat` varchar(5),
	`type` varchar(30),
	`hash` varchar(256),
	`inUse` boolean,
	`contentType` varchar(100),
	CONSTRAINT `content_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `oauth` (
	`createdAt` timestamp DEFAULT (now()),
	`state` text,
	`code` text
);
--> statement-breakpoint
CREATE TABLE `session` (
	`token` varchar(400) NOT NULL,
	`user` int,
	`createdAt` timestamp DEFAULT (now()),
	`expiresAt` timestamp DEFAULT (now()),
	CONSTRAINT `session_token` PRIMARY KEY(`token`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstname` text,
	`lastname` text,
	`email` text,
	`password` text,
	`googleId` text,
	`name` text,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
