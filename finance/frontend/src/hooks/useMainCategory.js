//-------------------------------------------------------//
//  File Name: useMainCategory.js
//  Description: Data Fetching Hook to obtain "MainCategory" model from the local database
//
//  Requirements:
//      - /api/posts (axios)
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
import { getRequest } from "../api/posts"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useMainCategory = () => {
    const [mainCategories, setMainCategories] = useState([]);

    console.log("running useMainCategory Hook!")

    const fetchMainCategories = async () => {
        try {          
            const response = await getRequest("maincategories/", '');
            if (response && response.data) setMainCategories(response.data);            
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

    return (mainCategories);
};
