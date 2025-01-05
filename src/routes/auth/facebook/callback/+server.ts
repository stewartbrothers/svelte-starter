// routes/login/google/callback/+server.ts
import { constructUser, generateUserKey } from '$lib/user';
import { facebook } from '$lib/server/oauth';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';

import type { RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';
import { usersTable } from '$lib/db/schema';
import { createSession } from '$lib/server/session';
import { LOGIN_REDIRECT_URL } from '$env/static/private';
// import { oauthTable } from '$lib/db/schema/schema';

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');

	// const confirmCode = await db.select().from(oauthTable).where(eq(oauthTable.state, state));

	if (code === null || state === null) {
		return new Response('Required details are empty please ask administrator to check the logs', {
			status: 400
		});
	}

	try {
		const tokens: OAuth2Tokens = await facebook.validateAuthorizationCode(code);
		const accessToken = tokens.accessToken();
		// const accessTokenExpiresAt = tokens.accessTokenExpiresAt();

		const url = new URL('https://graph.facebook.com/me');
		url.searchParams.set('access_token', accessToken);
		url.searchParams.set('fields', ['id', 'name', 'picture', 'email'].join(','));
		const response = await fetch(url);
		const fbUser = await response.json();

		console.info(fbUser);
		const email = fbUser.email;
		// const store = confirmCode.pop();

		if (fbUser === null || fbUser.id === undefined) {
			return new Response(null, { status: 400 });
		}

		//Does the user already exist...
		const existingUser = await db.select().from(usersTable).where(eq(usersTable.fbId, fbUser.id));

		if (existingUser !== null && existingUser.length == 1) {
			console.info('Is existing user!');
			const user = constructUser(existingUser.pop());
			createSession(event.cookies, user);

			return new Response(null, {
				status: 303,
				headers: {
					Location: LOGIN_REDIRECT_URL
				}
			});
		}

		// Check for existing user via email...

		const key = generateUserKey(email);
		// Create a new user
		const { given_name, family_name } = fbUser.name.split(' ');
		let userRow = await db
			.insert(usersTable)
			.values({
				fbId: fbUser.id,
				name: fbUser.name,
				email: email,
				key: key,
				firstname: given_name,
				lastname: family_name
			})
			.returning();

		const userDat = userRow.pop();
		const user = constructUser(userDat);
		createSession(event.cookies, user);

		//Then validate the user and log them in...
		return new Response(null, {
			status: 303,
			headers: {
				Location: LOGIN_REDIRECT_URL
			}
		});
	} catch (e) {
		// Invalid code or client credentials
		return new Response(
			'This token has already been used, please return to the sign in page and try again',
			{ status: 400 }
		);
	}
}
