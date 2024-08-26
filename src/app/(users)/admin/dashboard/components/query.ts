'use server';

import prisma from '@/lib/prisma';

export async function getUsersData() {
	try {
		const staffs = await prisma.user.findMany({
			select: {
				id: true,
				firstName: true,
				lastName: true,
				email: true,
				phoneNumber: true,
				createdAt: true,
			},
		});
		return staffs;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export type OrgData = Awaited<ReturnType<typeof getUsersData>>;
