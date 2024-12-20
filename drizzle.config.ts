import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
	schema: './src/lib/db/schema',
	out: './src/lib/db/migrations',
	dbCredentials: {
		host: process.env.DB_HOST ?? 'localhost',
		port: parseInt(process.env.DB_PORT ?? '5432'),
		user: process.env.DB_USER ?? '',
		password: process.env.DB_PASS ?? '',
		database: process.env.DB_NAME ?? '',
		ssl: process.env.DB_SSL == 'true'
	}
});
