import { db } from '$lib/db';
import { usersTable } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { sha512 } from 'js-sha512';
import { USER_SALT } from '$env/static/private';

export type User = {
	id: string;
	name: string;
	iat: number;
	tracer: string;
};

export type Token = {
	header: string;
	payload: User;
	signature: string;
};

export async function createUser(email: string, password: string, cPassword: string) {
	const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email));
	if ((existingUser !== null && existingUser.length == 1) || password !== cPassword) {
		//Cannot create a new user where one exists
		return false;
	}

	await db.insert(usersTable).values({
		email: email,
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

	console.info(password);
	console.info(email);

	if (userMatched !== null && userMatched.length === 1) {
		const now = Math.floor(Date.now() / 1000);
		const user: User = {
			id: userMatched[0].key,
			name: userMatched[0].name,
			iat: now,
			tracer: sha512('tracer: ' + now + Math.random() + userMatched[0].id).substring(0, 16)
		};

		return user;
	}

	throw new Error('User not validated');
}
