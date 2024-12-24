import { db } from '$lib/db';
import { usersTable } from '$lib/db/schema/schema';
import { eq, and } from 'drizzle-orm';
import { sha512 } from 'js-sha512';
import { USER_SALT } from '$env/static/private';

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

export async function validateUser(email: string, password: string) {
	const userMatched = await db
		.select()
		.from(usersTable)
		.where(
			and(eq(usersTable.email, email), eq(usersTable.password, sha512.hex(password + USER_SALT)))
		);

	if (userMatched !== null && userMatched.length === 1) {
		return true;
	}

	return false;
}
