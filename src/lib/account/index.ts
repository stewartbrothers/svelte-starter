import { db } from '$lib/db';
import { accountsTable, accountUsersTable, usersTable } from '$lib/db/schema';
import { type User } from '$lib/user';
import { eq } from 'drizzle-orm';

export type Account = {
	id: string;
	name: string;
	slug: string;
};

export async function createAccount(name) {
	acc = await db.insert(accountsTable).values({
		name: name,
		slug: name.toLowerCase().replace(/\s/g, '-')
	});
}

export async function loadUserAccounts(user: User) {
	const result = await db
		.select({
			id: accountsTable.id,
			name: accountsTable.name,
			slug: accountsTable.slug
		})
		.from(accountsTable)
		.leftJoin(accountUsersTable, eq(accountsTable.id, accountUsersTable.account))
		.leftJoin(usersTable, eq(accountUsersTable.user, usersTable.id))
		.where(eq(usersTable.key, user.id));

	return result;
}
