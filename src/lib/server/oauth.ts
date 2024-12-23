import { Facebook, Google } from 'arctic';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const google = new Google(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	'http://gdev.allset.cloud:5173/auth/google/callback'
);

export const facebook = new Facebook(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	'http://gdev.allset.cloud:5173/auth/google/callback'
)