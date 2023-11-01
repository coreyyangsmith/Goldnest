//-------------------------------------------------------//
//  File Name: useAccounts.js
//  Description: Data Fetching Hook to obtain "Accounts" model from the local database
//
//  Requirements:
//      - /api/authenticated (axios)
//
//  Returns:
//      - List of Objects (Accounts)
//
// Created By: Corey Yang-Smith
// Date: November 1st, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from 'react';

// API Import
import { getRequest } from '../api/authenticated';

// Custom Hooks
import useToken from './useToken';

//  MAIN FUNCTION
//-------------------------------------------------------//

export const useAccounts = () => {
	const { token } = useToken();
	const [accounts, setAccounts] = useState([]);

	const fetchAccounts = async () => {
		try {
			const response = await getRequest('accounts/', token);
			if (response && response.data) {
				const userAccounts = response.data;
				setAccounts(userAccounts);
			}
		} catch (err) {
			if (err.response) {
				//Not in 200 Response Range
				console.log(err.response.data);
				console.log(err.response.status);
				console.log(err.response.headers);
			} else {
				console.log(`Error: ${err.message}`);
			}
		}
	};

	useEffect(() => {
		fetchAccounts();
	}, []);

	return { accounts, setAccounts };
};
