//-------------------------------------------------------//
//  File Name: useBudgetReport.js
//  Description: Data Fetching Hook to obtain "Budget" model from the local database. Returns all Budgets.
//
//  Requirements:
//      - /api/authenticated (axios)
//      - Selected Sub Category
//
//  Returns:
//      - Sorted List of Budgets (Sub Category)
//
// Created By: Corey Yang-Smith
// Date: October 3rd, 2023
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

export const useBudget = () => {
    const { token } = useToken();
    const [budgets, setBudgets] = useState([]);

    // Process budget data and change 'sub_category' from objects reference to pk reference
    // Needed for budget PUT req
    function processData(arr) {
        arr.forEach((element, index) => {
            arr[index].sub_category.main_category.user = element.sub_category.main_category.user.id;            
        });
        return arr;
      }

    const fetchBudgets = async () => {
        try {          
            const response = await getRequest("budgets/", token);
            if (response && response.data){
                const userBudgets = response.data;
                const sortedBudgets = userBudgets.sort((a,b) => a.month - b.month);
                const cleanedBudgets = processData(sortedBudgets);
                setBudgets(cleanedBudgets);
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
    }, []);

    return { budgets, setBudgets };
};
