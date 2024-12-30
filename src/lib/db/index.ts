import { drizzle } from 'drizzle-orm/node-postgres';
import { DB_URL, DB_TYPE } from '$env/static/private';
import fs from 'fs';

let dbSetup;
if (DB_TYPE === 'neon') {
	dbSetup = drizzle(DB_URL!);
} else {
	dbSetup = drizzle({
		logger: true,
		connection: {
			connectionString: DB_URL,
			ssl: {
				rejectUnauthorized: false,
				key: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.key').toString(),
				cert: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.crt').toString(),
				ca: fs.readFileSync('/Users/gerwood/projects/sb/app/fe/cert/server.crt').toString()
			}
		}
	});
}

export const db = dbSetup;

// FOR MYSQL
// import { drizzle } from 'drizzle-orm/mysql2';
// import { DB_URL } from '$env/static/private';

// if (!DB_URL) {
// 	throw new Error('DB_URL is not defined');
// }

// // export function initDb() {
// // 	if (!db) {
// // 		db = drizzle(DB_URL);
// // 	}
// // }

// export const db = drizzle(DB_URL);
