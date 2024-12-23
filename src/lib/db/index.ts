import { drizzle } from 'drizzle-orm/mysql2';
import { DB_URL } from '$env/static/private';

if (!DB_URL) {
	throw new Error('DB_URL is not defined');
}

export const db = drizzle(DB_URL);
