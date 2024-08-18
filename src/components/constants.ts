import {
	FlagIcon,
	GroupIcon,
	HomeIcon,
	ReceiptIcon,
	SettingsIcon,
	UsersIcon,
	BarChart,
} from 'lucide-react';

export const AppRoutes = [
	{
		path: '/admin/dashboard',
		name: 'Dashboard',
		icon: HomeIcon,
		section: 'home',
		note: 'Can view platform statistics',
		hasAction: false,
	},
	{
		path: '/admin/members',
		name: 'Members',
		icon: UsersIcon,
		section: 'home',
		note: 'Can edit and delete splits',
		hasAction: true,
	},
	{
		path: '#',
		name: 'Analytics',
		icon: BarChart,
		section: 'general',
		note: 'Can edit and delete users',
		hasAction: true,
	},
	{
		path: '#',
		name: 'Testimonials',
		icon: GroupIcon,
		section: 'general',
		note: 'Can edit and delete communities',
		hasAction: true,
	},
	{
		path: '#',
		name: 'Requests',
		icon: ReceiptIcon,
		section: 'general',
		note: 'Can edit and delete transactions',
		hasAction: true,
	},
	{
		path: '/admin/reports',
		name: 'Reports',
		icon: FlagIcon,
		section: 'general',
		note: 'Can edit and delete reports',
		hasAction: true,
	},
	{
		path: '#',
		name: 'Settings',
		icon: SettingsIcon,
		section: 'settings',
		note: 'Can edit admin settings',
		hasAction: true,
	},
];

export function getSectionRoutes(section: string) {
	return AppRoutes.filter((route) => route.section === section);
}
