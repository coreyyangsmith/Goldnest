//-------------------------------------------------------//
//  File Name: Accounts.jsx
//  Description: Main Page for Accounts.
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Accounts
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useState, useEffect } from 'react';

// MUI Imports
import { Grid, Stack } from '@mui/material/';

// Custom Hooks
import { useAccounts } from '../../hooks/useAccounts';

// My Page Import
import AccountSummary from './AccountSummary';
import AccountNetWorth from './AccountNetWorth';

{
	/* [ACCOUNTS] will be the place where you can track your net worth and update new accounts.
    This data will be fed into your dashboard and reports section.
    Accounts may consist of:
    - Chequings/Savings accounts
    - Investment Accounts (Stock, potentially dividends, HISA, GICs, other fixed incomes)
    - Other Assets that contribute to NW
    
    - This being said, when you create new entries, they will not be tied to accounts, in fact
    entries will only be tied to your budget and serve as an I/O summary. They will essentially
    be two separate aspects of your finance (Macro vs Micro)
*/
}

//  MAIN FUNCTION
//-------------------------------------------------------//

const Accounts = () => {
	const { accounts, setAccounts } = useAccounts();
	return (
		<>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
				>
					<AccountSummary
						accounts={accounts}
						setAccounts={setAccounts}
					/>
				</Grid>

				<Grid
					item
					xs={12}
				>
					<AccountNetWorth accounts={accounts} />
				</Grid>
			</Grid>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default Accounts;
