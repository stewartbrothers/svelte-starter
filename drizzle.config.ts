import { defineConfig, Config } from 'drizzle-kit';

const config: Config = defineConfig({
	dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
	schema: './src/lib/db/schema',
	out: './src/lib/db/migrations',
	dbCredentials: {
		url: process.env.DATABASE_URL!
	}
});

export default config;
