import { Input } from '@mui/material';
import React, { useState } from 'react';

const EditableCell = ({ getValue }) => {
	const initialValue = getValue();
	const [value, setValue] = useState(initialValue);

	return (
		<Input
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			EditableCell
		</Input>
	);
};

export default EditableCell;
