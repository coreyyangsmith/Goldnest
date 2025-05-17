//-------------------------------------------------------//
//  File Name: AccountSummaryTable.jsx
//  Description: Account Summary Display Table
//
//  Requirements:
//      - Accounts.jsx
//
//  Returns:
//		- TODO
//
// Created By: Corey Yang-Smith
// Date: December 15th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';

// MUI Import
import { Typography, Grid, Divider, Paper } from '@mui/material';
import AccountSummaryList from './AccountSummaryList';
import AccountSummaryData from './AccountSummaryData';

//  MAIN FUNCITON
//-------------------------------------------------------//

const AccountSummaryTable = (props) => {
	return (
		<Grid
			container
			direction="row"
			sx={{
				height: '90%',
				width: '100%',
				overflow: 'hidden visible',
			}}
		>
			<Grid
				container
				item
				xs={3}
			// sx={{ background: 'blue' }}
			>
				<AccountSummaryList accounts={props.accounts} />
			</Grid>

			<Grid
				container
				item
				xs={7}
			// sx={{ overflow: 'hidden visible', background: 'gray', maxWidth: '10%' }}
			>
				<AccountSummaryData
					accounts={props.accounts}
					accountEntries={props.accountEntries}
					sx={{}}
				/>
			</Grid>
			<Grid
				container
				item
				xs={2}
			// sx={{ background: 'red' }}
			>
				<Typography variant="dashboard_heading">Account Entry</Typography>
			</Grid>
		</Grid>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummaryTable;
