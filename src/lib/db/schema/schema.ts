// import { sql } from 'drizzle-orm';
import { json, int, text, time, boolean, timestamp, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';


const table = mysqlTable;
const enm = mysqlEnum;

export const usersTable = table('users', {
	id: int().primaryKey().autoincrement(),
	firstname: text(),
	lastname: text(),
	email: text(),
	password: text(),
	googleId: text(),
	name: text()
});

export const oauthTable = table('oauth', {
	createdAt: timestamp().defaultNow(),
	state: text(),
	code: text()
});

export const sessionTable = table('session', {
	user: int().primaryKey().autoincrement(),
	createdAt: timestamp().defaultNow(),
	expiresAt: timestamp().defaultNow(),
	sessionId: varchar({length: 200})
});

export const contentTable = table('content', {
	id: int().primaryKey().autoincrement(),
	title: text('title'),
	status: enm(["Usable","Retired"]),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp(),
	tags: json(),
	thumbnail: varchar({length: 400}),
	description: varchar({length: 500}),
	code: varchar({length:100}),
	url: varchar({length: 300}),
	time: time(),
	hasOverlays: boolean(),
	version: int(),
	category: varchar({length: 100}),
	ratio: json(),
	fileFormat: varchar({length: 5}),
	type: varchar({length: 30}),
	hash: varchar({length: 256}),
	inUse: boolean(),
	contentType: varchar({length: 100})
});