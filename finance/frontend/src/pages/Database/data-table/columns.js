import moment from 'moment';
import EditableCell from './EditableCell.jsx';

export const columnDef = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'routing',
		header: 'Entity',
		cell: EditableCell,
	},
	{
		accessorKey: 'name',
		header: 'Item Name',
		cell: EditableCell,
	},
	{
		accessorKey: 'main_category',
		header: 'Main Category',
	},
	{
		accessorKey: 'sub_category',
		header: 'Sub Category',
	},
	{
		accessorKey: 'income',
		header: 'Income',
		cell: ({ getValue }) =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(getValue()),
	},
	{
		accessorKey: 'expense',
		header: 'Expense',
		cell: ({ getValue }) =>
			new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(getValue()),
	},
];
