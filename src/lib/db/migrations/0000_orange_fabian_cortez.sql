CREATE TYPE "public"."status" AS ENUM('Usable', 'Retired');--> statement-breakpoint
CREATE TABLE "account" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(200),
	"name" varchar(200),
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp,
	CONSTRAINT "account_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "content" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(200),
	"status" "status",
	"created_at" timestamp DEFAULT now(),
	"updatedAt" timestamp,
	"tags" json,
	"thumbnail" varchar(400),
	"description" varchar(500),
	"code" varchar(100),
	"url" varchar(300),
	"time" time,
	"hasOverlays" boolean,
	"version" integer,
	"category" varchar(100),
	"ratio" json,
	"fileFormat" varchar(5),
	"type" varchar(30),
	"hash" varchar(256),
	"inUse" boolean,
	"contentType" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(200),
	"name" varchar(200),
	"description" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp,
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"key" varchar(100),
	"firstname" varchar(200),
	"lastname" varchar(200),
	"email" varchar(200),
	"password" varchar(300),
	"googleId" varchar(200),
	"name" varchar(200),
	"avatar" varchar(400),
	CONSTRAINT "users_key_unique" UNIQUE("key")
);
