'use server';

import prisma from '@/lib/prisma';
import { FormProps } from './columns';

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

export async function updateUser(props: FormProps) {
	try {
		const { userId, deposit, profit, returns } = props;
		const user = await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				deposit: parseInt(deposit),
				profit: parseInt(profit),
				totalReturn: parseInt(returns),
			},
		});
	} catch (error) {
		console.log(error);
		return null;
	}
}
