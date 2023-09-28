//-------------------------------------------------------//
//  File Name: useBudget.js
//  Description: Data Fetching Hook to obtain "Budget" model from the local database, based on selected Sub Category
//
//  Requirements:
//      - /api/posts (axios)
//      - Selected Sub Category
//
//  Returns:
//      - Sorted List of Budgets (Sub Category)
//
// Created By: Corey Yang-Smith
// Date: September 27th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from "react"

// API Import
import { getRequest } from "../api/posts"

// Custom Hooks
// import { useAuth } from "../context/AuthContext"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useBudget = (selectedSub) => {
    // const { authUser } = useAuth();
    const [budgets, setBudgets] = useState([]);

    const fetchBudgets = async () => {
        try {          
            const response = await getRequest("budgets/", '');
            if (response && response.data){
                const allBudgets = response.data;
                // const userBudgets = allBudgets.filter((data) => data.user == authUser);
                const filteredBudgets = allBudgets.filter((data) => data.sub_category.pk === selectedSub);
                const sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
                setBudgets(sortedBudgets);
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
        fetchBudgets();
    }, [selectedSub]);

    return { budgets, setBudgets};
};
