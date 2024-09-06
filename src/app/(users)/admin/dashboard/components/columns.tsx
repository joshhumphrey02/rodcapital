'use client';

import { DataTableColumnHeader } from '@/components/shared/data-table-column-header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ColumnDef, Row } from '@tanstack/react-table';
import { format } from 'date-fns/format';
import Link from 'next/link';
import { OrgData, updateUser } from './query';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

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
					<div>
						<div className="text-sm font-medium capitalize text-foreground">
							{name}
						</div>
						<div className="text-sm text-foreground">
							<span className="truncate">{member.phoneNumber}</span>
						</div>
					</div>
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
		header: () => <span className="hidden md:flex">Email</span>,
		cell({ row }) {
			const user = row.original;
			const [open, setOpen] = useState(false);

			return (
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger>
						<span>{user?.email ?? ''}</span>
					</DrawerTrigger>
					<DrawerContent>
						<div className=" max-w-md mx-auto">
							<DrawerHeader className="text-left">
								<DrawerTitle className="text-center">
									Edit User Record
								</DrawerTitle>
								<DrawerDescription>
									Make changes to user profile record. Click save when you're
									done.
								</DrawerDescription>
							</DrawerHeader>
							<ProfileForm userId={user.id} className="px-4" />
							<DrawerFooter className="pt-2">
								<DrawerClose asChild>
									<Button variant="outline">Cancel</Button>
								</DrawerClose>
							</DrawerFooter>
						</div>
					</DrawerContent>
				</Drawer>
			);
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

export interface FormProps {
	deposit: string;
	profit: string;
	returns: string;
	userId: string;
}
interface ProfileFormProps extends React.ComponentProps<'form'> {
	userId: string;
}

function ProfileForm({ className, userId }: ProfileFormProps) {
	const [form, setForm] = useState<FormProps>({
		deposit: '',
		profit: '',
		returns: '',
		userId: userId,
	});
	return (
		<form
			onSubmit={async () => await updateUser(form)}
			className={cn('grid items-start gap-4', className)}>
			<div className="grid gap-2">
				<Label htmlFor="email">Deposit</Label>
				<Input
					type="text"
					id="email"
					value={form.deposit}
					onChange={(e) => setForm({ ...form, deposit: e.target.value })}
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="username">Profit</Label>
				<Input
					id="username"
					value={form.profit}
					onChange={(e) => setForm({ ...form, profit: e.target.value })}
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="username2">Total Return</Label>
				<Input
					id="username2"
					value={form.returns}
					onChange={(e) => setForm({ ...form, returns: e.target.value })}
				/>
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	);
}
