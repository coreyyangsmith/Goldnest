//-------------------------------------------------------//
//  File Name: AccountSummary.jsx
//  Description: Account Summary Panel
//
//  Requirements:
//      - Accounts.jsx
//
//  Returns:
//		- TODO
//
// Created By: Corey Yang-Smith
// Date: November 2nd, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';

// MUI Import
import { Typography, Grid, Divider, Paper } from '@mui/material';
import AccountSummaryTable from './AccountSummaryTable';

//  MAIN FUNCITON
//-------------------------------------------------------//

const AccountSummary = (props) => {
	return (
		<Paper
			sx={{
				paddingLeft: '32px',
				paddingRight: '32px',
				paddingTop: '16px',
				paddingBottom: '16px',
			}}
			elevation={4}
		>
			<Grid
				container
				sx={{ height: '50vh' }}
			>
				<Typography variant="dashboard_heading">Account Summary</Typography>
				<Divider />
				<AccountSummaryTable
					accounts={props.accounts}
					setAccounts={props.setAccounts}
					accountEntries={props.accountEntries}
					setAccountEntries={props.setAccountEntries}
				/>
			</Grid>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummary;
