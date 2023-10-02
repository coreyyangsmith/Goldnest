//-------------------------------------------------------//
//  File Name: useSubCategoryAll.js
//  Description: Data Fetching Hook to obtain "SubCategory" model from the local database. Returns all (for DB entry autocomplete)
//  Requirements:
//      - /api/posts (axios)
//
//  Returns:
//      - List of Objects (Sub Category)
//
// Created By: Corey Yang-Smith
// Date: September 30th, 2023
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

export const useSubCategory = () => {
    const { token } = useToken();
    const [subCategories, setSubCategories] = useState([]);

    // Process Data
    // Convert nested objects --> object.name
    // for readability
    function processData(arr) {
        arr.forEach((element, index) => {
          arr[index].main_category = element.main_category;
      });   
        return arr;
      }   

    const fetchSubCategories = async () => {
        try {          
            const response = await getRequest("subcategories/", token);
            if (response && response.data){
                const userSubCategories = response.data;
                const cleanData = processData(userSubCategories);
                setSubCategories(cleanData);   
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
    }, []);

    return { subCategories, setSubCategories };
};
