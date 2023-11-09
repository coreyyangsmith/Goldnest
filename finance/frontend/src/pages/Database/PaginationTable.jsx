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
	getPaginationRowModel,
} from '@tanstack/react-table';

export default function PaginationTable() {
	const finalData = useMemo(() => dataJSON, []);
	const finalColumnDef = useMemo(() => columnDef, []);

	const tableInstance = useReactTable({
		columns: finalColumnDef,
		data: finalData,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<>
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
			<hr />
			<div>
				<button
					onClick={() => tableInstance.setPageIndex(0)}
					disabled={!tableInstance.getCanPreviousPage()}
				>
					{'<<'}
				</button>
				<button
					onClick={() => tableInstance.previousPage()}
					disabled={!tableInstance.getCanPreviousPage()}
				>
					Previous Page
				</button>
				<button
					onClick={() => tableInstance.nextPage()}
					disabled={!tableInstance.getCanNextPage()}
				>
					Next Page
				</button>
				<button
					disabled={!tableInstance.getCanNextPage()}
					onClick={() =>
						tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
					}
				>
					{'>>'}
				</button>
			</div>
			<hr />
			<ul>
				<li>
					You are on page number:{' '}
					{tableInstance.options.state.pagination.pageIndex}
				</li>
				<li>Total Pages: {tableInstance.getPageCount() - 1}</li>
			</ul>
			<hr />
			<input
				type="number"
				defaultValue={tableInstance.options.state.pagination.pageIndex}
				onChange={(e) => tableInstance.setPageIndex(e.target.value)}
			/>
			<hr />
			<h4>
				Current Page Size {tableInstance.options.state.pagination.pageSize}
			</h4>
			<select
				value={tableInstance.options.state.pagination.pageSize}
				onChange={(e) => tableInstance.setPageSize(e.target.value)}
			>
				{[10, 25, 50].map((pageSizeEl) => {
					return (
						<option
							key={pageSizeEl}
							value={pageSizeEl}
						>
							{pageSizeEl}
						</option>
					);
				})}
			</select>
		</>
	);
}
