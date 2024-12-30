// routes/login/google/callback/+server.ts
import { constructUser, generateUserKey } from '$lib/user';
import { google } from '$lib/server/oauth';
import { decodeIdToken } from 'arctic';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';
import { oauthTable, usersTable } from '$lib/db/schema';
import { createSession } from '$lib/server/session';
import { LOGIN_REDIRECT_URL } from '$env/static/private';
// import { oauthTable } from '$lib/db/schema/schema';

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');

	const confirmCode = await db.select().from(oauthTable).where(eq(oauthTable.state, state));

	if (code === null || state === null || confirmCode === null || confirmCode.length != 1) {
		return new Response('Required details are empty please ask administrator to check the logs', {
			status: 400
		});
	}
	const store = confirmCode.pop();

	if (state !== store.state) {
		return new Response(null, { status: 400 });
	}

	let tokens: OAuth2Tokens;

	try {
		tokens = await google.validateAuthorizationCode(code, store?.code);
	} catch (e) {
		// Invalid code or client credentials
		return new Response(
			'This token has already been used, please return to the sign in page and try again',
			{ status: 400 }
		);
	}

	const claims = decodeIdToken(tokens.idToken());
	const googleUserId = claims.sub;
	const username = claims.name;
	const email = claims.email;

	console.info(claims);

	//Does the user already exist...
	const existingUser = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.googleId, googleUserId));

	console.info('Is existing user?');
	console.info(existingUser);

	if (existingUser !== null && existingUser.length == 1) {
		console.info('Is existing user!');
		const user = constructUser(existingUser!.id, username, existingUser!.key);
		createSession(event.cookies, user);

		return redirect(303, LOGIN_REDIRECT_URL);
	}

	// Check for existing user via email...

	const key = generateUserKey(email);
	let id: string;
	// Create a new user
	let userRow = await db
		.insert(usersTable)
		.values({
			googleId: googleUserId,
			name: username,
			email: email,
			key: generateUserKey(email),
			firstname: claims.given_name,
			lastname: claims.family_name
		})
		// .onConflictDoUpdate({ target: usersTable.email, set: { name: 'John' } })
		.returning();

	const userDat = userRow.pop();
	const user = constructUser(userDat!.id, username, userDat!.key);
	createSession(event.cookies, user);

	//Then validate the user and log them in...
	return redirect(303, LOGIN_REDIRECT_URL);
}
