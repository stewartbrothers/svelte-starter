import { defineConfig, Config } from 'drizzle-kit';

let config: Config;
if (process.env.DB_TYPE === 'neon') {
	config = defineConfig({
		dialect: 'postgresql',
		schema: './src/lib/db/schema',
		out: './src/lib/db/migrations',
		dbCredentials: {
			url: process.env.DB_URL!
		}
	});
} else {
	config = defineConfig({
		dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
		schema: './src/lib/db/schema',
		out: './src/lib/db/migrations',
		dbCredentials: {
			url: process.env.DB_URL!
			// host: process.env.DB_HOST ?? 'localhost',
			// port: parseInt(process.env.DB_PORT ?? '5432'),
			// user: process.env.DB_USER ?? '',
			// password: process.env.DB_PASS ?? '',
			// database: process.env.DB_NAME ?? '',
			// ssl: process.env.DB_SSL == 'true'
		}
	});
}

export default config;
