// React Import
import React from 'react'

// Routing
import StyledLink from '../../components/StyledLink'

// MUI Import
import { AppBar, Toolbar } from '@mui/material'


const toolbarSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


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

export default LandingNav