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
import { useState } from "react";

//  MAIN FUNCTION
//-------------------------------------------------------//

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    if (!tokenString) return null;

    try {
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    } catch (error) {
      // If token is not valid JSON, return it directly
      return tokenString;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    // If userToken is already a string, store it directly
    if (typeof userToken === "string") {
      localStorage.setItem("token", userToken);
      setToken(userToken);
    } else {
      // Otherwise stringify the object
      localStorage.setItem("token", JSON.stringify(userToken));
      setToken(userToken.token);
    }
  };

  return {
    setToken: saveToken,
    token,
  };
}
