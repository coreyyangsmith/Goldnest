//-------------------------------------------------------//
//  File Name: useMainCategory.js
//  Description: Data Fetching Hook to obtain "MainCategory" model from the local database
//
//  Requirements:
//      - /api/authenticated (axios)
//
//  Returns:
//      - List of Objects (Main Category)
//
// Created By: Corey Yang-Smith
// Date: September 23rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from "react"

// API Import
import { getRequest } from "../api/authenticated"

// Custom Hooks
import { useAuth } from "../context/AuthContext"
import useToken from "../hooks/useToken"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useMainCategory = () => {
    const { token } = useToken();
    const [mainCategories, setMainCategories] = useState([]);

    const fetchMainCategories = async () => {
        try {          
            const response = await getRequest("maincategories/", token);
            if (response && response.data)
            {
                const userMainCategories = response.data;
                setMainCategories(userMainCategories);  
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
        fetchMainCategories();
    }, []);

    return mainCategories;
};
