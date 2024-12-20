import { pgTable, uniqueIndex, uuid, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: uuid().primaryKey().notNull(),
	name: text(),
	email: text(),
	password: text(),
	username: text(),
	firstname: text(),
	lastname: text(),
	token: text(),
	dateCreated: text("date_created"),
	dateUpdated: text("date_updated"),
}, (table) => [
	uniqueIndex("idx_users_token").using("btree", table.token.asc().nullsLast().op("text_ops")),
	uniqueIndex("idx_users_username").using("btree", table.username.asc().nullsLast().op("text_ops")),
]);
