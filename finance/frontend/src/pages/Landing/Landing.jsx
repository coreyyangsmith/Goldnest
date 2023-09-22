// React Import
import React from 'react'

//MUI Imports
import { Container } from '@mui/material';

// Routing
import { Route, Routes } from "react-router-dom";

// My Page Imports
import LandingNav from './LandingNav';
import Contact from './Contact';
import Register from '../Register/Register'
import Login from '../Login/Login.jsx'
import Home from './Home';


const Landing = () => {
    return <>
    <LandingNav/>
    <Container>
        <h2>Welcome to The Landing Page!</h2>






    <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />  
        <Route path="/contact" element={<Contact />} />          
    </Routes>  
    </Container>

    </>
}

export default Landing;