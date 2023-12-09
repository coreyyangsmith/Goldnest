//-------------------------------------------------------//
//  File Name: useAccountEntries.js
//  Description: Data Fetching Hook to obtain "AccountEntries" model from the local database
//
//  Requirements:
//      - /api/authenticated (axios)
//
//  Returns:
//      - List of Objects (AccountEntries)
//
// Created By: Corey Yang-Smith
// Date: December 9th, 2023
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

export const useAccountEntries = () => {
	const { token } = useToken();
	const [accountEntries, setAccountEntries] = useState([]);

	const fetchAccountEntries = async () => {
		try {
			const response = await getRequest('accountentries/', token);
			if (response && response.data) {
				const userAccountEntries = response.data;
				setAccountEntries(userAccountEntries);
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
		fetchAccountEntries();
	}, []);

	return { accountEntries, setAccountEntries };
};
