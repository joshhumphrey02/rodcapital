import { Adapter } from '@auth/core/adapters';

export type RFCAdapter = Adapter & {
	checkAdmin?: (email: string) => Promise<boolean>;
};

export interface IMember {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	createdAt?: Date;
	updatedAt?: Date;
	role?: string;
	gender?: string;
	verified?: boolean;
	password?: string;
	birthdate?: Date;
	image?: string;
	username?: string;
	address?: string;
	maritalStatus?: string;
	bornAgain?: boolean;
	employmentStatus?: string;
	occupation?: string;
	cormfirmPassword?: string;
}
