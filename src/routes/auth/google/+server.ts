import { generateState, generateCodeVerifier } from 'arctic';
import { google } from '$lib/server/oauth';
import { db } from '$lib/db';
import { oauthTable } from '$lib/db/schema';

export async function GET(): Promise<Response> {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const scopes = ['openid', 'profile', 'email'];
	const url = google.createAuthorizationURL(state, codeVerifier, scopes);

	await db.insert(oauthTable).values({
		state: state,
		code: codeVerifier
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
}
