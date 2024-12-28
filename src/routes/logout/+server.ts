import {deleteTokenCookie} from '$lib/server/session';

export async function GET(): Promise<Response> {
	return new Response(null, {
	   deleteTokenCookie()
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
}
