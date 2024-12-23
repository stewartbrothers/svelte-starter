import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'mysql', // 'mysql' | 'sqlite' | 'turso'
	schema: './src/lib/db/schema',
	out: './src/lib/db/migrations',
	dbCredentials: {
		url: process.env.DB_URL ?? 'mysql://root@localhost:3306/bad_schema',
	}
});
