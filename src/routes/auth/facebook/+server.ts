import { generateState } from 'arctic';
import { facebook } from '$lib/server/oauth';
import { db } from '$lib/db';
import { oauthTable } from '$lib/db/schema';

export async function GET(): Promise<Response> {
	const state = generateState();
	await db.insert(oauthTable).values({
		state: state,
		code: 'fb--blank'
	});

	const scopes = ['email', 'public_profile'];
	const url = facebook.createAuthorizationURL(state, scopes);

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
}
