// React Import 
import React, { useState, useEffect, useContext } from "react";
import useToken from "../../components/useToken";

// MUI Imports
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"
import { PropTypes } from 'prop-types';

// Router
import { useNavigate } from 'react-router-dom';

// API
import { getRequest } from '../../api/posts'

// Context - Current User
import { useAuth } from "../../context/AuthContext"


async function loginUser(credentials) {
    return fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
}
 
export default function Login() {
    const { token, setToken } = useToken();
    const { authUser, 
            setAuthUser, 
            isLoggedIn, 
            setIsLoggedIn } = useAuth()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const navigate = useNavigate();

    // Obtain Current User
    const setCurrentUser = async() => {
        try {
            const response = await getRequest('users/current/', {
              params: {
                token: token
              }
            })
            setAuthUser(response.data.username);      
            setIsLoggedIn(true);  
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
            setAuthUser(null);
            setIsLoggedIn(false);                               
        }
    }    
 
    const handleSubmit = async e => {
        e.preventDefault();
 
        setUsernameError(false)
        setPasswordError(false)
 
        if (username === '') {
            setUsernameError(true)
        }
        if (password === '') {
            setPasswordError(true)
        }

        const token = await loginUser({
            username,
            password
        });

        // if successful login
        if (token.detail != "Not found."){

            console.log("successful login!")
            setToken(token);
            setCurrentUser();
            navigate('/');    
            window.location.reload(false);  //Trigger Refresh            
        }
    }

    console.log(authUser);

    // If user is already logged in, do not let them fill form, simply redirect"
    // TODO
    {if (authUser != null)
    {
        navigate('/')
    }}


     
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={username}
                    error={usernameError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" 
                            color="secondary" 
                            type="submit">Login</Button>
             
        </form>
        <small>Need an account? <Link to="/register">Register here</Link></small>
        </React.Fragment>
     );
}