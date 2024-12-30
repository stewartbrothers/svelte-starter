import type { LayoutServerLoad } from './$types';

//Need to build out the menu here....

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		user: locals.user,
		account: {
			name: 'AdsLatte Inc.',
			type: 'ExpressMe'
		},
		menu: [],
		secondary: []
	};
};
