CREATE TABLE "oauth" (
	"createdAt" timestamp DEFAULT now(),
	"state" varchar(200),
	"code" varchar(200)
);
--> statement-breakpoint
DROP TABLE "projects" CASCADE;