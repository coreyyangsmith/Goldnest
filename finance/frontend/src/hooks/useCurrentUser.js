//-------------------------------------------------------//
//  File Name: useCurrentUser.js
//  Description: Data Fetching Hook to obtain current "User" model from the local database
//
//  Requirements:
//      - /api/authenticated (axios)
//      - Selected Sub Category
//
//  Returns:
//      - Sorted List of Budgets (Sub Category)
//
// Created By: Corey Yang-Smith
// Date: October 8th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from "react"

// API Import
import { getRequest } from "../api/authenticated"

// Custom Hooks
import useToken from "./useToken"

//  MAIN FUNCTION
//-------------------------------------------------------//

export const useCurrentUser = (selectedSub) => {
    const { token } = useToken();
    const [currentUser, setCurrentUser] = useState([]);

    const fetchCurrentUser = async () => {
        try {          
            const response = await getRequest("users/", token);
            if (response && response.data){
                const users = response.data;
                setCurrentUser(users[0]);
            }         
        } catch (err) {
            if (err.response) { //Not in 200 Response Range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);   
            } else {
                    console.log(`Error: ${err.message}`);
            }      
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return { currentUser };
};
