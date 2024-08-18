import { z } from 'zod';

export const signupSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	password: z
		.string()
		.min(8, 'Password is too short. Minimum 8 characters required.')
		.max(255),
	phoneNumber: z
		.string()
		.min(11, 'Number not complete. Minimum 11 digits required.')
		.max(11),
	firstName: z.string().min(1, 'First name is required.').max(50),
	lastName: z.string().min(1, 'Last name is required.').max(50),
});
export type SignupInput = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
	email: z.string().email('Please enter a valid email.'),
	password: z.string().min(1, 'Please provide your password.').max(255),
});
export type LoginInput = z.infer<typeof loginSchema>;
