//-------------------------------------------------------//
//  File Name: Logout.jsx
//  Description: Logout current user and reset tracked parameters.
//
//  Requirements:
//      - None
//
//  Returns:
//      - TODO
//
// Created By: Corey Yang-Smith
// Date: September 24th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect } from "react";
import useToken from "../../hooks/useToken";

// Router
import { useNavigate } from "react-router-dom";

// API
import { getRequest } from "../../api/authenticated";

//  MAIN FUNCTION
//-------------------------------------------------------//

const Logout = () => {
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      console.log("logging user out");
      try {
        setToken(null);
        const response = await getRequest("logout/", {
          params: {
            token: token,
          },
        });
        setToken(null);
        console.log("logged out!");
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          // Not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    logout();
    navigate("/");
    window.location.reload(false);
  }, []);

  return (
    <>
      <div>loggin</div>
      <p>logging out!</p>
    </>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default Logout;
