import { db } from '$lib/db';
import type { Cookies, RequestEvent } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, SESSION_LIFE, SESSION_COOKIE } from '$env/static/private';
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

export function setTokenCookie(cookies: Cookies, token: string): void {
	cookies.set(SESSION_COOKIE, token, {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		maxAge: Number(SESSION_LIFE),
		sameSite: 'lax'
	});
}

export function deleteTokenCookie(cookies: Cookies): void {
	cookies.set(SESSION_COOKIE, '', {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		maxAge: 0
	});
}

export function generateJWTSessionToken(user: User): string {
	console.info(user);
	return jwt.sign(user, JWT_SECRET, { expiresIn: Number(SESSION_LIFE) });
}
export function generateJWTApiToken(user: User): string {
	return jwt.sign(user, JWT_SECRET);
}

export function createSession(cookies: Cookies, user: User) {
	const token = generateJWTSessionToken(user);
	setTokenCookie(cookies, token);
	return token;
}
