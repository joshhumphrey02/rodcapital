import { Lucia, TimeSpan } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { User, PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const adapter = new PrismaAdapter(client.userSession, client.user);

export const lucia = new Lucia(adapter, {
	getUserAttributes: (attributes) => {
		return {
			id: attributes.id,
			email: attributes.email,
			createdAt: attributes.createdAt,
			updatedAt: attributes.updatedAt,
		};
	},
	sessionExpiresIn: new TimeSpan(20, 'd'),
	sessionCookie: {
		name: 'session',
		expires: false, // session cookies have very long lifespan (2 years)
		attributes: {
			secure: process.env.NODE_ENV === 'production',
		},
	},
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseSessionAttributes: DatabaseSessionAttributes;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes extends Omit<User, 'hashedPassword'> {}
