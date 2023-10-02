//-------------------------------------------------------//
//  File Name: Settings.jsx
//  Description: Main Page for User Settings.
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for User Settings
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useEffect, useState } from 'react';

// My Imports
import useToken from '../../hooks/useToken'
import { getRequest } from '../../api/authenticated'


//  MAIN FUNCTION
//-------------------------------------------------------//

const Settings = () => {
    const { token } = useToken();
    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        try {          
            const response = await getRequest("profiles/", token);
            if (response && response.data){
                const userProfile = response.data; 
                console.log(userProfile);            
                setUserData(userProfile);   
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
        fetchUserData();
    }, [])


    if (userData.length > 0) {
        return <>


        <h2>Welcome to Profile Settings</h2>
        <p>Username: {userData[0].user.username}</p>
        <p>First Name: {userData[0].user.first_name}</p>
        <p>Last Name: {userData[0].user.last_name}</p>    
        <p>Email: {userData[0].user.email}</p>        
        <p>Date of Birth: {userData[0].dateOfBirth}</p>
        <p>Gender: {userData[0].gender}</p>
    
        </>
    }

}


//  EXPORTS
//-------------------------------------------------------//

export default Settings;