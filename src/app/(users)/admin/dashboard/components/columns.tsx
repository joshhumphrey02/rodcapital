'use client';

import { DataTableColumnHeader } from '@/components/shared/data-table-column-header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ColumnDef, Row } from '@tanstack/react-table';
import { format } from 'date-fns/format';
import Link from 'next/link';
import { OrgData } from './query';

export const columns: ColumnDef<OrgData[0]>[] = [
	{
		id: 'name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Member's Name" />
		),
		enableSorting: false,
		enableHiding: false,
		cell({ row }) {
			const member = row.original;
			const name = `${member?.firstName || ''} ${member?.lastName || ''} `;
			return (
				<div className="flex space-x-2">
					<Avatar className="h-8 w-8">
						<AvatarFallback className=" uppercase">
							{member?.firstName?.charAt(0) || ''}
							{member?.lastName?.charAt(0) || ''}
						</AvatarFallback>
					</Avatar>
					<Link
						href={`/admin/members?memberId=${member.id}`}
						className=" hover:underline">
						<div className="text-sm font-medium capitalize text-foreground">
							{name}
						</div>
						<div className="text-sm text-foreground">
							<span className="truncate">{member.phoneNumber}</span>
						</div>
					</Link>
				</div>
			);
		},
		filterFn: (row, id, value) => {
			const member = row.original;

			const firstName = member.firstName || '';
			const lastName = member.lastName || '';
			const phoneNumber = member.phoneNumber || '';
			const newRegex = new RegExp(value, 'ig');
			return (
				newRegex.test(firstName) ||
				newRegex.test(lastName) ||
				newRegex.test(phoneNumber)
			);
		},
	},
	{
		accessorKey: 'email',
		header: () => <span className="hidden md:flex">Created</span>,
		cell({ row }) {
			const email = row.original?.email;
			return <span>{email ?? ''}</span>;
		},
	},
	{
		accessorKey: 'created',
		header: () => <span className="hidden md:flex">Created</span>,
		cell({ row }) {
			const createdAt = row.original?.createdAt;
			return (
				<time className="text-sm text-foreground ml-auto hidden md:flex">
					{createdAt
						? format(new Date(createdAt), 'MMM d, yyyy,  hh:mm a')
						: 'N/A'}
				</time>
			);
		},
	},
];
