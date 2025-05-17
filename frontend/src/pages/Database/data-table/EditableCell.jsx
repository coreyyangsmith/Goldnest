import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react';

const EditableCell = ({ getValue, row, column, table }) => {
	const initialValue = getValue();
	const [value, setValue] = useState(initialValue);

	const onBlur = () => {
		table.options.meta?.updateData(row.index, column.id, value);
	};

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return (
		<Input
			value={value}
			onChange={(e) => setValue(e.target.value)}
			onBlur={onBlur}
		>
			EditableCell
		</Input>
	);
};

export default EditableCell;
