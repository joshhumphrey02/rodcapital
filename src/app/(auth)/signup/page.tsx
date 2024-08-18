import { Metadata } from 'next';

import AuthSignupForm from '../components/auth-signup-form';

export const metadata: Metadata = {
	title: 'Rod Capital - Sign Up',
	description: 'Sign up to Rod Capital to start shipping your packages.',
};

export default async function SignupPage() {
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Let’s get started
				</h1>
				<p className="text-sm text-muted-foreground">
					Sign up to Rod Capital to start your logistics journey.
				</p>
			</div>
			<AuthSignupForm />
		</div>
	);
}
