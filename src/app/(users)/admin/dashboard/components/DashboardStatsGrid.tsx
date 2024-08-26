import { Briefcase, PieChart, Users, UsersRound } from 'lucide-react';

export default function DashboardStatsGrid(data: { totalUsers?: number }) {
	const { totalUsers } = data;
	return (
		<div className=" xl:grid-cols-4 md:grid-cols-2 grid-cols-1 grid gap-4 w-full">
			<BoxWrapper>
				<div className="h-12 rounded-full w-12 flex items-center justify-center bg-sky-500">
					<UsersRound />
				</div>
				<div className="pl-4">
					<span className="text-md font-[RobotoRegular] xl:text-lg text-foreground">
						Total Users
					</span>
					<div className="flex items-center">
						<strong className="text-base text-muted-foreground font-[RobotoRegular]">
							{totalUsers || 0}
						</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
	);
}

interface BoxWrapper {
	children: Array<JSX.Element>;
}

function BoxWrapper({ children }: BoxWrapper) {
	return (
		<div className="bg-card rounded-lg p-4 flex-1 border flex items-center">
			{children}
		</div>
	);
}
