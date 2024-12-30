import { createUser, validateUser } from '$lib/user';
import { createSession } from '$lib/server/session';
import { redirect } from '@sveltejs/kit';
import { LOGIN_REDIRECT_URL } from '$env/static/private';

export async function load() {
	const x = {
		data: 'No Longer Do I Need You!'
	};

	return x;
}

export const actions = {
	default: async ({ request, cookies }) => {
		console.info('_');

		const data = await request.formData();

		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const cPassword = data.get('cPassword')?.toString();

		if (email === null || password === null || password !== cPassword) {
			throw new Error('Things are not defined.');
		}

		const created = await createUser(email, password, cPassword);

		if (created) {
			const user = await validateUser(email, password);
			console.info('A');
			createSession(cookies, user);
			console.info('B');

			return redirect(303, LOGIN_REDIRECT_URL);
		}
	}
};
