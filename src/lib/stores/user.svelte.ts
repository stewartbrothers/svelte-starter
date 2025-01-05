import { writable } from 'svelte/store';

export const user = writable({
	username: 'jdoe',
	name: 'John Doe',
	email: 'jdoe@email.com',
	avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
});
