ALTER TABLE "oauth" ADD PRIMARY KEY ("state");--> statement-breakpoint
ALTER TABLE "oauth" ALTER COLUMN "state" SET NOT NULL;