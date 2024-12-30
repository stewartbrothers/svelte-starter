import { Facebook, Google } from 'arctic';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	FB_CLIENT_ID,
	FB_CLIENT_SECRET
} from '$env/static/private';

export const domain = 'https://gdev.allset.cloud:5173';

export const google = new Google(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	domain + '/auth/google/callback'
);

export const facebook = new Facebook(
	FB_CLIENT_ID,
	FB_CLIENT_SECRET,
	domain + '/auth/facebook/callback'
);
