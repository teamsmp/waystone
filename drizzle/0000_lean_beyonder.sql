-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `beam_items` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`uuid` char(36) NOT NULL,
	`serialized_item` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `servers` (
	`id` int(10) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`mark` varchar(255) NOT NULL,
	`players` int(10) unsigned NOT NULL DEFAULT 0
);

*/