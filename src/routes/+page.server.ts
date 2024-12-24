import { createUser } from '$lib/user/helpers';

export function load() {
	return {
		data: 'No Longer Do I Need You!'
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const cPassword = data.get('cPassword')?.toString();

		if (email === null || password === null || password !== cPassword) {
			console.error('I am not impress');
			throw new Error('Things are not defined.');
		}

		console.info('Made it through');

		const created = await createUser(email, password, cPassword);

		if (created) {
			return true;
		}
	}
};
