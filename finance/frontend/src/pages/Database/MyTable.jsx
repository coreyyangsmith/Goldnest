// React Import
import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';

// My Components Import
import { columnDef } from './data-table/columns';
import dataJSON from './data-table/data.json';
import './data-table/table.css';
import Filter from './data-table/FilterFunction';

// React Table
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table';

// MUI Import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MyTable() {
	const [data, setData] = useState(dataJSON);
	//const finalData = useMemo(() => dataJSON, []);
	const finalColumnDef = useMemo(() => columnDef, []);

	const [columnFilters, setColumnFilters] = useState([]);

	const tableInstance = useReactTable({
		columns: finalColumnDef,
		data: data,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			columnFilters: columnFilters,
		},
		onColumnFiltersChange: setColumnFilters,
		getPaginationRowModel: getPaginationRowModel(),
		meta: {
			updateData: (rowIndex, columnId, value) =>
				setData((prev) =>
					prev.map((row, index) =>
						index === rowIndex
							? {
									...prev[rowIndex],
									[columnId]: value,
							  }
							: row
					)
				),
		},
	});

	return (
		<>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label="database table"
				>
					<TableHead>
						{tableInstance.getHeaderGroups().map((headerEl) => {
							return (
								<TableRow key={headerEl.id}>
									{headerEl.headers.map((columnEl) => {
										return (
											<TableCell
												key={columnEl.id}
												colSpan={columnEl.colSpan}
											>
												{columnEl.isPlaceholder ? null : (
													<>
														{flexRender(
															columnEl.column.columnDef.header,
															columnEl.getContext()
														)}
														<div>
															<Filter
																column={columnEl.column}
																table={tableInstance}
															/>
														</div>
													</>
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableHead>
					<TableBody>
						{tableInstance.getRowModel().rows.map((rowEl) => {
							return (
								<TableRow key={rowEl.id}>
									{rowEl.getVisibleCells().map((cellEl) => {
										return (
											<TableCell key={cellEl.id}>
												{flexRender(
													cellEl.column.columnDef.cell,
													cellEl.getContext()
												)}
											</TableCell>
										);
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
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
