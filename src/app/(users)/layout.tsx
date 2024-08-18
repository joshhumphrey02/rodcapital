import React from 'react';
import { redirect } from 'next/navigation';
import { validateRequest } from '@/lib/auth/validate-request';

interface Props {
	children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
	const { session } = await validateRequest();
	if (!session?.userId) {
		return redirect('/login');
	}
	return (
		<div className="w-full ">
			<div>{children}</div>
		</div>
	);
};

export default RootLayout;
