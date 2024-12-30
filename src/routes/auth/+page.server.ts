import { LOGIN_REDIRECT_URL } from '$env/static/private';
import { setTokenCookie, generateJWTSessionToken } from '$lib/server/session';
import { validateUser } from '$lib/user';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (email === null || password === null) {
			throw new Error('Username and password were not provided.');
		}

		const user = await validateUser(email, password);

		if (user) {
			const token = generateJWTSessionToken(user);
			setTokenCookie(event.cookies, token);
			return redirect(303, LOGIN_REDIRECT_URL);
		}
	}
} satisfies Actions;
