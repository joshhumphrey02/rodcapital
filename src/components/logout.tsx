'use client';
import { logout } from '@/lib/auth/actions';
import React from 'react';

const Logout = () => {
	return (
		<div className="text-black" onClick={async () => await logout()}>
			Logout
		</div>
	);
};

export default Logout;
