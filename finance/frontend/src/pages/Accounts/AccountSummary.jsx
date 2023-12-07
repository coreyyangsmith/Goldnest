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
			</Grid>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummary;

// Essentially will be blocked into two sections (3)
// 1 -> Main Info
// Contains Info Summary, Dynamically loads info from db and sorts categories. (vertical scroll)
// from this, horizontal scroll your entire timeline
// 2 -> New Entry
