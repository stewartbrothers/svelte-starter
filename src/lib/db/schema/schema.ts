import { sql } from 'drizzle-orm';
import { text, uuid, pgTable, timestamp } from 'drizzle-orm/pg-core';

const table = pgTable;

export const usersTable = table('users', {
	Id: uuid('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	Firstname: text('first_name'),
	Lastname: text('last_name'),
	Email: text('email'),
	Password: text('password'),
	GoogleId: text('googleId'),
	Name: text('name')
});

export const oauthTable = table('oauth', {
	CreatedAt: timestamp('created_at', { withTimezone: true, precision: 4 }).defaultNow(),
	State: text('state'),
	Code: text('code')
});

export const sessionTable = table('session', {
	User: uuid('user_id').primaryKey(),
	CreatedAt: timestamp('created_at', { withTimezone: true, precision: 4 }).defaultNow(),
	ExpiresAt: timestamp('expires_at', { withTimezone: true, precision: 4 }).defaultNow(),
	SessionId: text('session_key')
});
