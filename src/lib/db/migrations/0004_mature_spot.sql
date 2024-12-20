ALTER TABLE "oauth" ADD COLUMN "created_at" timestamp (4) with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "oauth" DROP COLUMN "id";