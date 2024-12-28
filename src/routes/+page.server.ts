import { createUser } from '$lib/user';

export async function load() {
	const x = {
		data: 'No Longer Do I Need You!'
	};

	return x;
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();
		const cPassword = data.get('cPassword')?.toString();

		if (email === null || password === null || password !== cPassword) {
			throw new Error('Things are not defined.');
		}

		const created = await createUser(email, password, cPassword);

		if (created) {
			// const user = await validateUser(email, password);

			return true;
		}
	}
};
