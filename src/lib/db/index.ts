import { drizzle } from 'drizzle-orm/mysql2';
import { DB_URL } from '$env/dynamic/private';

export const db = drizzle(DB_URL);
