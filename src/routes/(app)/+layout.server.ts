import type { LayoutServerLoad } from './$types';
import { loadUserAccounts } from '$lib/account';
//Need to build out the menu here....

export const load: LayoutServerLoad = async ({ locals }) => {
	const accounts = await loadUserAccounts(locals.user);

	console.info(locals.user);

	let account = undefined;
	if (accounts.length > 0) {
		account = accounts![0];
	}

	return {
		user: locals.user,
		account: account,
		accounts: accounts,
		menu: [
			{
				title: 'Manage',
				showTitle: false,
				items: [
					{
						title: 'Dashboard',
						url: '/dashboard',
						isActive: false,
						icon: 'dashboard'
					},
					{
						title: 'Content',
						url: '/content',
						// This should be `Component` after lucide-svelte updates types
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						isActive: false,
						icon: 'database'
					}
				]
			}
		],
		secondary: []
	};
};

// {
// 		title: string;
// 		items: {
// 			title: string;
// 			url: string;
// 			// This should be `Component` after lucide-svelte updates types
// 			// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 			icon: any;
// 			isActive?: boolean;
// 			items?: {
// 				title: string;
// 				url: string;
// 			}[];
// 		}
