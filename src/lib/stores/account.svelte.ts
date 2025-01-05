import { writable } from 'svelte/store';

export const account = writable({
	id: 'account-doe',
	name: 'Account',
	slug: 'account'
});
