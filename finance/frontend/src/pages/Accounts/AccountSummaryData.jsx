//-------------------------------------------------------//
//  File Name: AccountSummaryData.jsx
//  Description: Account Summary Display Table - List Data
//
//  Requirements:
//      - AccountSummaryTable.jsx
//
//  Returns:
//		- TODO
//
// Created By: Corey Yang-Smith
// Date: December 27th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react';

// MUI Import
import { Stack, Button, Paper, Typography, Box } from '@mui/material';

// Utilities
import { getDates } from '../../utils/accountUtilities.js';

//  MAIN FUNCITON
//-------------------------------------------------------//

const AccountSummaryData = (props) => {
	const [dateData, setDateData] = useState([]);

	useEffect(() => {
		setDateData(getDates(props.accountEntries));
	}, [props]);

	const myDates = dateData.map((date) => {
		const year = date.slice(0, 4);
		const month = date.slice(5, 7);
		const day = date.slice(8, 10);

		return (
			<React.Fragment key={date}>
				<Stack direction="column">
					<Typography>{year}</Typography>
					<Typography>
						{month}-{day}
					</Typography>
				</Stack>
			</React.Fragment>
		);
	});

	const myAccounts = props.accounts.map((account) => {
		return (
			<React.Fragment key={account.id}>
				<Paper
					sx={{ padding: '4px', paddingLeft: '16px', paddingRight: '16px' }}
					elevation={2}
				>
					<Stack
						direction="row"
						spacing={0.5}
					>
						<Typography>{account.account_type} |</Typography>
						<Typography>{account.name}</Typography>
					</Stack>
				</Paper>
			</React.Fragment>
		);
	});
	return (
		<Box>
			<Stack
				direction="row"
				spacing={1}
				sx={{ background: 'red' }}
			>
				{myDates}
			</Stack>
		</Box>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummaryData;
