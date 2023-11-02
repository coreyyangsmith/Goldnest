//-------------------------------------------------------//
//  File Name: AccountNetWorth.jsx
//  Description: Account Net Worth, Paper for eCharts
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

//  MAIN FUNCTION
//-------------------------------------------------------//

const AccountNetWorth = (props) => {
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
				sx={{ height: '30vh' }}
			>
				<Typography variant="dashboard_heading">Net Worth</Typography>
				<Divider />
			</Grid>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountNetWorth;
