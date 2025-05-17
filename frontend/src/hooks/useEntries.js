//-------------------------------------------------------//
//  File Name: useEntries.js
//  Description: Data Fetching Hook to obtain "Entry" model from the local database
//
//  Requirements:
//      - /api/posts (axios)
//
//  Returns:
//      - List of Entries
//
// Created By: Corey Yang-Smith
// Date: September 27th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from "react"

// API Import
import { getRequest } from "../api/authenticated"

// Custom Hooks
import useToken from "./useToken";

//  MAIN FUNCTION
//-------------------------------------------------------//

export const useEntries = () => {
    const { token } = useToken();
    const [entries, setEntries] = useState([]);

    // Process Data
    // Convert nested objects --> object.name
    // for readability
    function processData(arr) {
      arr.forEach((element, index) => {
        arr[index].date = element.date.toString().slice(0,10);  
        arr[index].main_category = element.main_category.name;
        arr[index].sub_category = element.sub_category.name;
        arr[index].routing = element.routing.name;
    });   
      return arr;
    }    

    const fetchEntries = async () => {
        try {          
            const response = await getRequest("entrys/", token);
            if (response && response.data){
                const userEntries = response.data;
                const cleanData = processData(userEntries);
                setEntries(cleanData);   
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
        fetchEntries();
    }, []);

    return { entries, setEntries, processData };
};
