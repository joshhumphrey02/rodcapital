'use client';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import { CalendarDays, Check, House, Menu, UserRound } from 'lucide-react';
import LinkItem from '@/components/shared/link-item';
import { usePathname } from 'next/navigation';
import { updateMember } from '@/reducers/Member';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { GetServices, GetProfile } from '@/lib/endpoints';
import { setSPending, updateServices } from '@/reducers/Services';
// import { updateRecord } from '@/reducers/Attendance';

const superAdmins = [
	'joshuahumphrey579@gmail.com',
	'mondaymoses.ict@gmail.com',
	'hotrphc@gmail.com',
];

const TabsView = (props: { userId: string | null }) => {
	const member = useAppSelector((state) => state.Member);
	const { userId } = props;
	const pathname = usePathname();
	const dispatch = useAppDispatch();
	useEffect(() => {
		const fetchData = async () => {
			if (userId) {
				const profile = await GetProfile(userId);
				// const record = await GetAttendance(userId);
				if (profile) {
					dispatch(updateMember({ ...profile }));
				}
				// if (record) {
				// dispatch(updateRecord({ ...record }));
				// }
			}
		};
		fetchData();
	}, [dispatch, userId]);
	useEffect(() => {
		dispatch(setSPending(true));
		const fetchServices = async () => {
			const result = await GetServices();
			if (result) dispatch(updateServices(result));
			dispatch(setSPending(false));
		};
		fetchServices();
	}, [dispatch]);
	return (
		<div className={cn(' w-full flex left-0 justify-center fixed bottom-0')}>
			<div className="max-w-md w-full px-6 bg-card dark:bg-card rounded-t-xl shadow border-t border-border pt-2 flex justify-between items-center">
				<div>
					<LinkItem
						href="/"
						className={cn(
							' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
							pathname === '/' ? 'text-primary' : ''
						)}>
						<House size={24} />
						<p className="text-sm font-medium">Home</p>
					</LinkItem>
				</div>
				<div>
					<LinkItem
						href="events"
						className={cn(
							' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
							pathname === '/events' ? 'text-primary' : ''
						)}>
						<CalendarDays size={24} />
						<p className="text-sm font-medium">Events</p>
					</LinkItem>
				</div>
				<div>
					<LinkItem
						href="/profile"
						className={cn(
							' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
							pathname === '/profile' ? 'text-primary' : ''
						)}>
						<UserRound size={24} />
						<p className="text-sm font-medium">Profile</p>
					</LinkItem>
				</div>
				{!superAdmins.includes(member?.email) && (
					<div>
						<LinkItem
							href="/store"
							className={cn(
								' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
								pathname === '/store' ? 'text-primary' : ''
							)}>
							<Menu size={24} />
							<p className="text-sm font-medium">More</p>
						</LinkItem>
					</div>
				)}
				{superAdmins.includes(member?.email) && (
					<div>
						<LinkItem
							href="/check-in"
							className={cn(
								' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
								pathname === '/check-in' ? 'text-primary' : ''
							)}>
							<Check size={24} />
							<p className="text-sm font-medium">Check-In</p>
						</LinkItem>
					</div>
				)}
				{superAdmins.includes(member?.email) && (
					<div>
						<LinkItem
							href="/admin/dashboard"
							className={cn(
								' flex flex-col gap-2 h-fit py-2 bg-transparent text-foregound',
								pathname === '/admin/dashboard' ? 'text-primary' : ''
							)}>
							<Menu size={24} />
							<p className="text-sm font-medium">Admin</p>
						</LinkItem>
					</div>
				)}
			</div>
		</div>
	);
};

export default TabsView;
