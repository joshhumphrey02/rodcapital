'use server';

/* eslint @typescript-eslint/no-explicit-any:0, @typescript-eslint/prefer-optional-chain:0 */

import { z } from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { generateId, Scrypt } from 'lucia';

import { lucia } from '@/lib/auth';

import {
	loginSchema,
	signupSchema,
	type LoginInput,
	type SignupInput,
} from '@/lib/validators/auth';

import { validateRequest } from '@/lib/auth/validate-request';
import { Paths } from '../constants';
import prisma from '@/lib/prisma';

export interface ActionResponse<T> {
	fieldError?: Partial<Record<keyof T, string | undefined>>;
	formError?: string;
}

export async function login(
	_: any,
	formData: LoginInput
): Promise<ActionResponse<LoginInput>> {
	const parsed = loginSchema.safeParse(formData);
	if (!parsed.success) {
		const err = parsed.error.flatten();
		return {
			fieldError: {
				email: err.fieldErrors.email?.[0],
				password: err.fieldErrors.password?.[0],
			},
		};
	}

	const { email, password } = parsed.data;

	const existingUser = await prisma.user.findFirst({
		where: {
			email: {
				equals: email,
				mode: 'insensitive',
			},
		},
	});
	if (!existingUser) {
		return {
			formError: 'Incorrect email or password',
		};
	}

	if (!existingUser || !existingUser?.hashedPassword) {
		return {
			formError: 'Incorrect email or password',
		};
	}
	const validPassword = await new Scrypt().verify(
		existingUser.hashedPassword,
		password
	);
	if (!validPassword) {
		return {
			formError: 'Incorrect email or password',
		};
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	return redirect(Paths.Home);
}

export async function signup(
	_: any,
	formData: SignupInput
): Promise<ActionResponse<SignupInput>> {
	const parsed = signupSchema.safeParse(formData);
	if (!parsed.success) {
		const err = parsed.error.flatten();
		return {
			fieldError: {
				email: err.fieldErrors.email?.[0],
				password: err.fieldErrors.password?.[0],
				phoneNumber: err.fieldErrors.phoneNumber?.[0],
				firstName: err.fieldErrors.firstName?.[0],
				lastName: err.fieldErrors.lastName?.[0],
			},
		};
	}

	const { email, password, firstName, lastName, phoneNumber } = parsed.data;

	const existingUser = await prisma.user.findFirst({
		where: {
			email: {
				equals: email,
				mode: 'insensitive',
			},
		},
	});

	if (existingUser) {
		return {
			formError: 'Cannot create account with that email',
		};
	}

	const userId = generateId(21);
	const hashedPassword = await new Scrypt().hash(password);

	await prisma.user.create({
		data: {
			id: userId,
			email,
			hashedPassword,
			firstName,
			lastName,
			phoneNumber,
		},
	});

	const session = await lucia.createSession(userId, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value);
	sessionCookie.attributes;
	return redirect(Paths.Home);
}

export async function logout(): Promise<{ error: string } | void> {
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: 'No session found',
		};
	}
	await lucia.invalidateSession(session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	return redirect('/');
}
