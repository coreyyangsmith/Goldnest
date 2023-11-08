// React Import
import * as React from 'react';
import { useMemo } from 'react';

// My Components Import
import { columnDef } from './data-table/columns';
import dataJSON from './data-table/data.json';
import './data-table/table.css';

// React Table
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
} from '@tanstack/react-table';

export default function ReactTableTest() {
	const finalData = useMemo(() => dataJSON, []);
	const finalColumnDef = useMemo(() => columnDef, []);

	const tableInstance = useReactTable({
		columns: finalColumnDef,
		data: finalData,
		getCoreRowModel: getCoreRowModel(),
	});

	console.log('test', tableInstance.getHeaderGroups());

	return (
		<table>
			<thead>
				{tableInstance.getHeaderGroups().map((headerEl) => {
					return (
						<tr key={headerEl.id}>
							{headerEl.headers.map((columnEl) => {
								return (
									<th
										key={columnEl.id}
										colSpan={columnEl.colSpan}
									>
										{columnEl.isPlaceholder
											? null
											: flexRender(
													columnEl.column.columnDef.header,
													columnEl.getContext()
											  )}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody>
				{tableInstance.getRowModel().rows.map((rowEl) => {
					return (
						<tr key={rowEl.id}>
							{rowEl.getVisibleCells().map((cellEl) => {
								return (
									<td key={cellEl.id}>
										{flexRender(
											cellEl.column.columnDef.cell,
											cellEl.getContext()
										)}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
