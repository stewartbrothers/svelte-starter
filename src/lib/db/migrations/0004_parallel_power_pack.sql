CREATE TABLE "account_users" (
	"user" uuid,
	"account" uuid
);
--> statement-breakpoint
ALTER TABLE "account" ADD COLUMN "creator" uuid;--> statement-breakpoint
ALTER TABLE "content" ADD COLUMN "account" uuid;--> statement-breakpoint
ALTER TABLE "account_users" ADD CONSTRAINT "account_users_user_users_id_fk" FOREIGN KEY ("user") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account_users" ADD CONSTRAINT "account_users_account_account_id_fk" FOREIGN KEY ("account") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_creator_users_id_fk" FOREIGN KEY ("creator") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content" ADD CONSTRAINT "content_account_account_id_fk" FOREIGN KEY ("account") REFERENCES "public"."account"("id") ON DELETE no action ON UPDATE no action;