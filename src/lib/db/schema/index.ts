import { sql } from 'drizzle-orm';
import { sha512 } from 'js-sha512';

import {
	uuid,
	pgTable as table,
	timestamp,
	boolean,
	json,
	varchar,
	pgEnum,
	time,
	integer as int
} from 'drizzle-orm/pg-core';

export const usersTable = table('users', {
	id: uuid('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	key: varchar({ length: 100 })
		.unique()
		.$defaultFn(() => genKey()),
	firstname: varchar({ length: 200 }),
	lastname: varchar({ length: 200 }),
	email: varchar({ length: 200 }),
	password: varchar({ length: 300 }),
	googleId: varchar({ length: 200 }),
	name: varchar({ length: 200 }),
	avatar: varchar({ length: 400 })
});

function genKey(): string {
	return sha512('key: ' + Math.random()).substring(0, 16);
}
export const oauthTable = table('oauth', {
	createdAt: timestamp().defaultNow(),
	state: varchar({ length: 200 }).primaryKey(),
	code: varchar({ length: 200 })
});

export const accounts = table('account', {
	id: uuid('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	slug: varchar({ length: 200 }).unique(),
	name: varchar({ length: 200 }),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp()
});

export const contentStatus = pgEnum('status', ['Usable', 'Retired']);

export const contentTable = table('content', {
	id: varchar()
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	title: varchar({ length: 200 }),
	status: contentStatus(),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp(),
	tags: json(),
	thumbnail: varchar({ length: 400 }),
	description: varchar({ length: 500 }),
	code: varchar({ length: 100 }),
	url: varchar({ length: 300 }),
	time: time(),
	hasOverlays: boolean(),
	version: int(),
	category: varchar({ length: 100 }),
	ratio: json(),
	fileFormat: varchar({ length: 5 }),
	type: varchar({ length: 30 }),
	hash: varchar({ length: 256 }),
	inUse: boolean(),
	contentType: varchar({ length: 100 })
});
