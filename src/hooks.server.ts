import { redirect, type Handle } from '@sveltejs/kit';
// import type { ServerInit } from '@sveltejs/kit';
import { type User } from '$lib/user';
import { validateSession } from '$lib/server/session';
import { SESSION_COOKIE, LOGIN_REDIRECT_URL, CRON_SECRET } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	//Quick check for CRONs.

	if (
		event.url.pathname.startsWith('/internal') &&
		event.request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`
	) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	let token: string | null;
	const jwtCookie = event.cookies.get(SESSION_COOKIE);
	if (jwtCookie) {
		console.info('Validating session: ' + jwtCookie);
		token = validateSession(jwtCookie);
	}

	if (!token) {
		console.info('All your bases are belong to us!');
		const authHeader = event.request.headers.get('Authorization');
		if (authHeader && authHeader.startsWith('Bearer ')) {
			const bearerToken = authHeader.substring(7); // Remove 'Bearer ' prefix
			token = validateSession(bearerToken);
		}
	}

	if (token) {
		// console.info('Token is valid');
		event.locals.user = token as User;
		delete event.locals.user.exp;
	} else {
		event.locals.user = null;
	}

	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	if (event.url.pathname.startsWith('/auth') && event.locals.user !== null) {
		return redirect(307, LOGIN_REDIRECT_URL);
	}

	if (event.url.pathname.startsWith('/dashboard') && event.locals.user === null) {
		return redirect(307, '/');
	}

	//AUTH TOKEN.
	const response = await resolve(event);
	//Add Bearer Token here...
	//Add Session Cookie here.

	return response;
};

//Setups for the Server

// export const init: ServerInit = async () => {
// 	await db.connect();
// };

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
