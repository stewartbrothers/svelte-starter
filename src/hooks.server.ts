import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/db';
import type { ServerInit } from '@sveltejs/kit';
import { type User } from '$lib/user';
import { generateJWTSession } from '$lib/server/session';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
	const u: User = {
		key: 'A random key',
		name: 'Gerwood'
	};

	event.locals.user = u;

	const token = generateJWTSession(u);

	console.info(token);
	console.info(jwt.decode(token));

	//Determine permissions here.

	console.info('Have executed');
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	//AUTH TOKEN.
	const response = await resolve(event);
	//Add Bearer Token here...
	//Add Session Cookie here.

	return response;
};

//Setups for the Server

export const init: ServerInit = async () => {
	await db.connect();
};

// export const handle: Handle = async ({ resolve, event }) => {
// 	// Apply CORS header for API routes
// 	if (event.url.pathname.startsWith('/')) {
// 		// Required for CORS to work
// 		if (event.request.method === 'OPTIONS') {
// 			return new Response(null, {
// 				headers: {
// 					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
// 					'Access-Control-Allow-Origin': '*',
// 					'Access-Control-Allow-Headers': '*'
// 				}
// 			});
// 		}
// 	}

// 	console.info(event.url);

// 	const response = await resolve(event);
// 	if (event.url.pathname.startsWith('/')) {
// 		response.headers.append('Access-Control-Allow-Origin', `*`);
// 	}
// 	return response;
// };
