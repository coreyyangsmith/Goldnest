//-------------------------------------------------------//
//  File Name: Landing.jsx
//  Description: Main Routing/Navigation Template for Landing Site.
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Landing Site
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Imports
import { Container, Grid, Stack } from '@mui/material';

// Routing
import { Route, Routes } from "react-router-dom";

// My Page Imports
import LandingNav from './LandingNav';
import LandingFooter from './LandingFooter';

import Contact from './Contact';
import Register from '../Register/Register'
import Login from '../Login/Login.jsx'
import Home from './Home';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Landing = () => {
    return <>
    <LandingNav/>
    <Container disableGutters>
        <Stack direction="column" spacing={2}>
                                
        </Stack>
        <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />         
        </Routes>  

    </Container>
    <LandingFooter/>

    </>
}

//  EXPORTS 
//-------------------------------------------------------//

export default Landing;