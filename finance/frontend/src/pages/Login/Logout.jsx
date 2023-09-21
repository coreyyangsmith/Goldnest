// React
import React, { useEffect } from 'react'
import useToken from "../../components/useToken";

// Router
import { useNavigate } from 'react-router-dom';

// API
import { getRequest } from "../../api/authenticated"

const Logout = () => {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async() => {
            console.log("logging user out");
            try {
                const response = await getRequest('logout/', {
                    params: {
                      token: token
                    }})
                console.log("logged out!")
            } catch (err) {
                if (err.response) {
                    // Not in 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);   
                }
                else {
                    console.log(`Error: ${err.message}`);
                }                             
            }
          }        
          logout();
          navigate('/');              
          window.location.reload(false);            
        }, [])  

  return (
    <>
    <div>loggin</div>
    <p>logging out!</p>
    </>
  )
}

export default Logout