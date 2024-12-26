import { createUser, validateUser } from '$lib/user/helpers';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const email = data.get('email')?.toString();
		const password = data.get('password')?.toString();

		if (email === null || password === null) {
			throw new Error('Things are not defined.');
		}

		const validated = await validateUser(email, password);

		if (validated) {
			return true;
		}
	}
};
