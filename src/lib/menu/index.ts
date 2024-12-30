export type Menu = {
	items: MenuItem[];
};

export type MenuItem = {
	title: string;
	url: string;
	// This should be `Component` after lucide-svelte updates types
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	isActive?: boolean;
	items?: MenuLink[];
};

export type MenuLink = {
	title: string;
	url: string;
};
