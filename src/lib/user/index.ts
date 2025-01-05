import { db } from '$lib/db';
import { usersTable } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { sha512 } from 'js-sha512';
import { USER_SALT } from '$env/static/private';

export type User = {
	id: string;
	name: string;
	email: string;
	avatar: string;
	iat: number;
	tracer: string;
};

export type Token = {
	header: string;
	payload: User;
	signature: string;
};

export function generateUserKey(email: string): string {
	return sha512('key: ' + email + Math.random()).substring(0, 16);
}

export async function createUser(email: string, password: string, cPassword: string) {
	const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email));
	if ((existingUser !== null && existingUser.length == 1) || password !== cPassword) {
		//Cannot create a new user where one exists
		return false;
	}

	await db.insert(usersTable).values({
		email: email,
		key: generateUserKey(email),
		password: sha512.hex(password + USER_SALT)
	});

	//If the user is created we need to log them in...

	return true;
}

export async function validateUser(email: string, password: string): Promise<User | null> {
	const userMatched = await db
		.select()
		.from(usersTable)
		.where(
			and(eq(usersTable.email, email), eq(usersTable.password, sha512.hex(password + USER_SALT)))
		);

	if (userMatched !== null && userMatched.length === 1) {
		return constructUser(userMatched);
	}

	throw new Error('User not validated');
}

export function constructUser(user): User {
	const now = Math.floor(Date.now() / 1000);
	return {
		id: user.key,
		name: user.name,
		email: user.email,
		avatar: user.avatar,
		iat: now,
		tracer: sha512('tracer: ' + now + Math.random() + user.id).substring(0, 16)
	};
}
