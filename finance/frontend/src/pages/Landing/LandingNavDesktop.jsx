//-------------------------------------------------------//
//  File Name: LandingNavDesktop.jsx
//  Description: (Top) Navigation Bar for Landing Site
//
//  Parents:
//      - Landing.jsx
//
//  Returns:
//      - Top AppBar and Links for Landing Site
//
// Created By: Corey Yang-Smith
// Created: September 23rd, 2023
// Updated: October 4th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// Routing
import StyledLink from '../../components/StyledLink'
import StyledHashLink from '../../components/StyledHashLink';

// React Router Import
import { Link } from 'react-router-dom';

// MUI Import
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material/'


//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingNavDesktop = () => {

  return (
    <AppBar color="background" position='sticky' elevation={0}>
        <Toolbar variant="regular" sx={toolbarSX} >
        <Grid container 
              justifyContent="space-evenly"
              alignItems="stretch">

          <Grid container 
                item 
                xs={3}
                direction="row"   
                justifyContent="flex-start"          
                alignItems="center">          
            <Typography variant='landing_title'>GOLDNEST</Typography>  
          </Grid>

          <Grid container 
                item 
                xs={6} 
                direction="row"                    
                justifyContent="center"
                alignItems="center">
            <StyledHashLink smooth to="/#features"><Typography variant='landing_menu'>Features</Typography></StyledHashLink>
            <StyledHashLink smooth to='/#price'><Typography variant='landing_menu'>Pricing</Typography></StyledHashLink>                
            <StyledHashLink smooth to="/#contact" ><Typography variant='landing_menu'>About Us</Typography></StyledHashLink>          
          </Grid>

          <Grid container 
                item 
                xs={3}
                direction="row"   
                justifyContent="flex-end"                               
                alignItems="center">
            <StyledLink to="/login"><Typography variant='landing_menu'>Login</Typography></StyledLink>              
            <Button variant='contained'
                    color='black'>
              <Link to="/register"><Typography variant='landing_button'>Sign Up</Typography></Link>    
            </Button>                   
          </Grid>
        </Grid>
        </Toolbar>
    </AppBar>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingNavDesktop