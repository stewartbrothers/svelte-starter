import { createAccount } from '$lib/account';

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const acc = createAccount(data.name);
	}
};
