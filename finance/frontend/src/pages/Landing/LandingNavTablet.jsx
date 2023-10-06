//-------------------------------------------------------//
//  File Name: LandingNavTablet.jsx
//  Description: (Top) Navigation Bar for Landing Site for Tablet
//
//  Parents:
//      - LandingNav.jsx
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
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Grid } from '@mui/material/'

// My Components
import LandingNavDrawer from './LandingNavDrawer';

//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingNavTablet = () => {
  return (

    <AppBar color="background" position='sticky' elevation={0}>
        <Toolbar variant="regular" sx={toolbarSX} >

        <Grid container 
              justifyContent="space-evenly"
              alignItems="stretch">

          <Grid container 
                item 
                xs={6}
                direction="row"   
                justifyContent="flex-start"         
                alignItems="center">          
            <Typography variant='landing_title'>GOLDNEST</Typography>  
          </Grid>

          <Grid container 
                item 
                xs={6}
                direction="row"   
                justifyContent="flex-end"            
                alignItems="center">          
            <LandingNavDrawer/>
          </Grid>          


        </Grid>


        </Toolbar>
    </AppBar>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingNavTablet