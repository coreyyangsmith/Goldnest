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
	getSortedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';

export default function SortingTable() {
	const finalData = useMemo(() => dataJSON, []);
	const finalColumnDef = useMemo(() => columnDef, []);

	const [sorting, setSorting] = useState([]);

	const tableInstance = useReactTable({
		columns: finalColumnDef,
		data: finalData,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			sorting: sorting,
		},
		onSortingChange: setSorting,
	});

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
										onClick={columnEl.column.getToggleSortingHandler()}
									>
										{columnEl.isPlaceholder
											? null
											: flexRender(
													columnEl.column.columnDef.header,
													columnEl.getContext()
											  )}
										{/* UP/DOWN SORTING */}
										{
											{ asc: ' ⇧', desc: ' ⇩' }[
												columnEl.column.getIsSorted() ?? null
											]
										}
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
