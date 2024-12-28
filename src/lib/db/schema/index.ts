// import { sql } from 'drizzle-orm';
import {
	json,
	int,
	time,
	boolean,
	timestamp,
	mysqlEnum,
	mysqlTable,
	varchar
} from 'drizzle-orm/mysql-core';

const table = mysqlTable;
const enm = mysqlEnum;

export const usersTable = table('users', {
	id: int().primaryKey().autoincrement(),
	key: varchar({ length: 100 }).unique(),
	firstname: varchar({ length: 200 }),
	lastname: varchar({ length: 200 }),
	email: varchar({ length: 200 }),
	password: varchar({ length: 300 }),
	googleId: varchar({ length: 200 }),
	name: varchar({ length: 200 }),
	avatar: varchar({ length: 400 })
});

export const oauthTable = table('oauth', {
	createdAt: timestamp().defaultNow(),
	state: varchar({ length: 200 }),
	code: varchar({ length: 200 })
});

export const sessionsTable = table('session', {
	token: varchar({ length: 400 }).primaryKey(),
	user: int(),
	createdAt: timestamp().defaultNow(),
	expiresAt: timestamp().defaultNow()
});

// export const projectsTable = table('projects', {});

export const contentTable = table('content', {
	id: int().primaryKey().autoincrement(),
	title: varchar({ length: 200 }),
	status: enm(['Usable', 'Retired']),
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
