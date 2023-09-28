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
import { getRequest } from "../api/posts"

// Custom Hooks
// import { useAuth } from "../context/AuthContext"


//  MAIN FUNCTION
//-------------------------------------------------------//

export const useEntities = () => {
    // const { authUser } = useAuth();
    const [entities, setEntities] = useState([]);

    const fetchEntities = async () => {
        try {          
            const response = await getRequest("entities/", '');
            if (response && response.data){
                const allEntities = response.data;
                const userEntities = allEntities.filter((data) => data.user == authUser);
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

    return entities;
};
