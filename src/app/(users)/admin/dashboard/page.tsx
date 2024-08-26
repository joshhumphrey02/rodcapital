import { Metadata } from 'next';
import { Plus } from 'lucide-react';
import { getUsersData } from './components/query';
import DashboardStatsGrid from './components/DashboardStatsGrid';
import Link from 'next/link';
import TabsView from './components/tabs-view';
import { validateRequest } from '@/lib/auth/validate-request';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Rod capital Dashboard',
	description: 'Dashboard of rod capital',
};

const superAdmins = [
	'joshhumphrey579@gmail.com',
	'worlumunachi5@gmail.com',
	'dengimoweidakolo@gmail.com',
];

export default async function Dashboard() {
	const data = await getUsersData();
	const { user } = await validateRequest();
	if (!user || !user?.email) redirect('/login');
	if (!superAdmins.includes(user?.email)) return redirect('/');
	return (
		<>
			<div className="flex-col md:flex w-full overflow-hidden">
				<div className="flex-1 space-y-4 p-2 md:p-8 pl-0 pt-6">
					<div className=" mt-1 mb-3 px-1 pt-2 flex flex-row justify-between items-center">
						<div>
							<h1 className=" font-[RobotoBold] md:text-2xl capitalize text-xl">
								Rod Capital Dashboard
							</h1>
							<h4 className=" font-[RobotoLight] mt-2 lg:text-lg text-[12px]">
								Create, manage and track users activities.
							</h4>
						</div>
					</div>
					<div className="w-full flex flex-col gap-6">
						<DashboardStatsGrid totalUsers={data.length} />

						<TabsView data={data} />
					</div>
				</div>
			</div>
		</>
	);
}
