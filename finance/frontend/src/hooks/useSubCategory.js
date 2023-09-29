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
// import { useAuth } from "../context/AuthContext"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useSubCategory = (selectedMain) => {
    // const { authUser } = useAuth();
    const [subCategories, setSubCategories] = useState([]);

    const fetchSubCategories = async () => {
        try {          
            const response = await getRequest("subcategories/", '');
            if (response && response.data){
                const allSubCategories = response.data;
                // const userSubCategories = allSubCategories.filter((data) => data.user == authUser);
                const filteredSubCat = allSubCategories.filter((data) => data.main_category == selectedMain);
                console.log(allSubCategories);
                console.log(selectedMain);
                console.log(filteredSubCat);
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
