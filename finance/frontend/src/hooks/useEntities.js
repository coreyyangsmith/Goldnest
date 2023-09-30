//-------------------------------------------------------//
//  File Name: useEntities.js
//  Description: Data Fetching Hook to obtain "Entity" model from the local database
//
//  Requirements:
//      - /api/posts (axios)
//
//  Returns:
//      - List of Entities
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
import useToken from "../hooks/useToken"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useEntities = () => {
    const { token } = useToken();    
    const [entities, setEntities] = useState([]);

    const fetchEntities = async () => {
        try {          
            const response = await getRequest("entitys/", token);
            if (response && response.data){
                const userEntities = response.data;
                setEntities(userEntities);   
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
        fetchEntities();
    }, []);

    return {entities, setEntities};
};
