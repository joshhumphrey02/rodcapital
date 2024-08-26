'use client';

import { columns } from './columns';
import { DataTable } from '@/components/shared/data-table';
import { DataTableToolbar } from '@/components/shared/data-table-toolbar';
import { OrgData } from './query';

type Props = {
	data: OrgData;
};
const tabs = ['All'];
export default function TabsView(props: Props) {
	const { data } = props;

	return (
		<div className="w-[300px] md:w-full">
			<DataTable
				columns={columns}
				data={data}
				HeaderComponent={({ table }) => (
					<div className="py-4 px-6 border-b flex justify-between space-x-4">
						<DataTableToolbar table={table as any} />
					</div>
				)}
			/>
		</div>
	);
}
