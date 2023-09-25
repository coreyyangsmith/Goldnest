//-------------------------------------------------------//
//  File Name: useToken.jsx
//  Description: Custom Hook to manage User Auth Token
//
//  Requirements:
//      - None
//
//  Returns:
//      - User Token
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useState } from 'react';


//  MAIN FUNCTION
//-------------------------------------------------------//

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}