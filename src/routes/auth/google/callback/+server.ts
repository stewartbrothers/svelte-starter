// routes/login/google/callback/+server.ts
import { generateSessionToken, createSession, setSessionTokenCookie } from '$lib/server/session';
import { google } from '$lib/server/oauth';
import { decodeIdToken } from 'arctic';
import { db } from '$lib/db';
import { eq } from 'drizzle-orm';

import type { RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';
import { oauthTable, usersTable } from '$lib/db/schema';
// import { oauthTable } from '$lib/db/schema/schema';

export async function GET(event: RequestEvent): Promise<Response> {
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');

	const confirmCode = await db.select().from(oauthTable).where(eq(oauthTable.state, state));

	if (code === null || state === null || confirmCode === null || confirmCode.length != 1) {
		return new Response(null, { status: 400 });
	}

	const store = confirmCode.pop();

	if (state !== store.state) {
		return new Response(null, { status: 400 });
	}

	let tokens: OAuth2Tokens;
	try {
		tokens = await google.validateAuthorizationCode(code, store?.Code);
	} catch (e) {
		// Invalid code or client credentials
		return new Response(null, { status: 400 });
	}
	const claims = decodeIdToken(tokens.idToken());
	const googleUserId = claims.sub;
	const username = claims.name;
	const email = claims.email;

	console.info(claims);

	const existingUser = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.googleId, googleUserId));

	// const existingUser = await db.query.usersTagb.findFirst({
	// 	with: {
	// 		GoogleId: googleUserId
	// 	}
	// });

	// TODO: Replace this with your own DB query.

	// const existingUser = await getUserFromGoogleId(googleUserId);
	console.info(existingUser);

	// event.cookies.set('oauth_state', state, {
	// 	path: '/',
	// 	// httpOnly: true,
	// 	maxAge: 60 * 10, // 10 minutes
	// 	sameSite: 'lax'
	// });
	// event.cookies.set('oauth_verifier', codeVerifier, {
	// 	path: '/',
	// 	// httpOnly: true,
	// 	maxAge: 60 * 10, // 10 minutes
	// 	sameSite: 'lax'
	// });

	if (existingUser !== null && existingUser.length == 1) {
		// const sessionToken = generateSessionToken();
		// const session = await createSession(sessionToken, existingUser.id);
		// 	setSessionTokenCookie(event, sessionToken, session.expiresAt);
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	}

	// // TODO: Replace this with your own DB query.
	// const user = await createUser(googleUserId, username);
	await db.insert(usersTable).values({
		googleId: googleUserId,
		name: username,
		email: email,
		firstname: claims.given_name,
		lastname: claims.family_name
	});

	return new Response('You are created ' + claims.family_name, { status: 200 });

	// const sessionToken = generateSessionToken();
	// const session = await createSession(sessionToken, user.id);
	// setSessionTokenCookie(event, sessionToken, session.expiresAt);
	// return new Response(null, {
	// 	status: 302,
	// 	headers: {
	// 		Location: '/'
	// 	}
	// });
}
