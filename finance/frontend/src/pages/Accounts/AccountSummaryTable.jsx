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

//  MAIN FUNCITON
//-------------------------------------------------------//

const AccountSummaryTable = (props) => {
	return (
		<Grid
			container
			direction="row"
			sx={{ background: 'gray', height: '90%', width: '100%' }}
		>
			<Grid
				container
				item
				xs={10}
				sx={{ background: 'orange' }}
			>
				<Typography variant="dashboard_heading">Account Summary</Typography>
			</Grid>
			<Grid
				container
				item
				xs={2}
			>
				<Typography variant="dashboard_heading">Account Summary</Typography>
			</Grid>
		</Grid>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummaryTable;
