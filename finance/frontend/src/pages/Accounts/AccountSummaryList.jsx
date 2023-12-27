//-------------------------------------------------------//
//  File Name: AccountSummaryList.jsx
//  Description: Account Summary Display Table - List Accounts
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
import React from 'react';

// MUI Import
import { Stack, Button, Paper, Typography } from '@mui/material';

//  MAIN FUNCITON
//-------------------------------------------------------//

const AccountSummaryList = (props) => {
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
		<Stack
			direction="column"
			spacing={1}
		>
			<Typography>Accounts</Typography>
			{myAccounts}
		</Stack>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountSummaryList;
