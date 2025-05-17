//-------------------------------------------------------//
//  File Name: useSubCategory.js
//  Description: Data Fetching Hook to obtain "SubCategory" model from the local database, based on selected Main Cateogry
//
//  Requirements:
//      - /api/posts (axios)
//      - Selected Main Category
//
//  Returns:
//      - List of Objects (Sub Category)
//
// Created By: Corey Yang-Smith
// Date: September 26th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from "react"

// API Import
import { getRequest } from "../api/posts"

// Custom Hooks
import useToken from "../hooks/useToken"

//  MAIN FUNCTION
//-------------------------------------------------------//

export const useSubCategory = (selectedMain) => {
    const { token } = useToken();
    const [subCategories, setSubCategories] = useState([]);

    const fetchSubCategories = async () => {
        try {          
            const response = await getRequest("subcategories/", token);
            if (response && response.data){
                const userSubCategories = response.data;
                const filteredSubCat = userSubCategories.filter((data) => data.main_category.id === selectedMain.id);              
                setSubCategories(filteredSubCat);   
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
        fetchSubCategories();
    }, [selectedMain]);

    return { subCategories, setSubCategories };
};
