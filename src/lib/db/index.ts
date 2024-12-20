import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_URL } from '$env/static/private';
import fs from 'fs';

export const db = drizzle({
	logger: true,
	connection: {
		connectionString: DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
			key: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.key').toString(),
			cert: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.crt').toString(),
			ca: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.crt').toString()
		}
	}
});
