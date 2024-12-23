import { createUser } from '$lib/user/helpers'

export function load() {
	return {
        data: "No Longer Do I Need You!"
    };
};

export const actions = {
    default: async ({cookies, request}) => {
        const data = await request.formData();
        const email = data.get('email')?.toString;
        const password = data.get('password')?.toString;
        const cPassword = data.get('cPassword')?.toString;

        if(email === null || password === null || password !== cPassword) {
            //Badness... Throw an error.

        }

        const created = await createUser(email.toString(), password, cPassword);

        // if(created) {
        // }
    }
}