import { db } from '$lib/db';
import { encodeBase32 } from '@oslojs/encoding';
import { sha512 } from 'js-sha512';
import { sessionsTable, usersTable } from '$lib/db/schema';
import type { RequestEvent } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, SESSION_LIFE } from '$env/static/private';
import { type User } from '$lib/user';

export function validateSession(token: string) {
	try {
		return jwt.verify(token, JWT_SECRET);
	} catch (e) {
		//Invalidate session?
		return null;
	}
}

export function invalidateSession(token: string): void {
	db.execute(`DELETE FROM session WHERE token = ${token}`);
}

export function invalidateUserSessions(userId: number): void {
	db.execute(`DELETE FROM session WHERE user = ${userId}`);
}

export function setJWTCookie(event: RequestEvent, token: string, expiresAt: Date): void {
	event.cookies.set('_session', token, {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax'
	});
}

export function deleteSessionTokenCookie(event: RequestEvent): void {
	event.cookies.set('session', '', {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		maxAge: 0
	});
}

export function generateJWTSession(user: User): string {
	return jwt.sign({ id: user.key, name: user.name }, JWT_SECRET, {
		expiresIn: SESSION_LIFE
	});
}

export function createSession(user: User) {
	const token = generateJWTSession(user);
	return token;
}
