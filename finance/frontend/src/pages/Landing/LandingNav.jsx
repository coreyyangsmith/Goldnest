//-------------------------------------------------------//
//  File Name: LandingNav.jsx
//  Description: (Top) Navigation Bar for Landing Site
//
//  Parents:
//      - Landing
//
//  Returns:
//      - Top AppBar and Links for Landing Site
//
// Created By: Corey Yang-Smith
// Date: September 23rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// Routing
import StyledLink from '../../components/StyledLink'

// MUI Import
import { AppBar, Toolbar } from '@mui/material'


//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingNav = () => {
  return (
    <AppBar color="primary" position='sticky'>
        <Toolbar variant="dense" sx={toolbarSX}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>                
          <StyledLink to="/login" >Login</StyledLink>
          <StyledLink to="/register" style={{color: 'orange'}}>Sign-Up</StyledLink>                
        </Toolbar>
    </AppBar>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingNav