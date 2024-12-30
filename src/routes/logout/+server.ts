import { deleteTokenCookie } from '$lib/server/session';
import { redirect } from '@sveltejs/kit';

export async function GET({ request, cookies }): Promise<Response> {
	deleteTokenCookie(cookies);
	return redirect(307, '/');
}
