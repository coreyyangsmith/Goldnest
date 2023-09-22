// React Import
import React from 'react'

// My Page Imports
import Register from '../Register/Register'
import Login from '../Login/Login.jsx'

// Component Imports
import StyledLink from '../../components/StyledLink'

// MUI Import
import { AppBar, Toolbar } from '@mui/material'

// Routing
import { Link } from 'react-router-dom'

const linkSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


const LandingNav = () => {
  return (


    <AppBar color="primary" position='sticky'>
        <Toolbar variant="dense" sx={linkSX}>

        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>                
        <StyledLink to="/login" >Login</StyledLink>
        <StyledLink to="/register" style={{color: 'orange'}}>Sign-Up</StyledLink>                
        </Toolbar>



    </AppBar>
  )
}

export default LandingNav