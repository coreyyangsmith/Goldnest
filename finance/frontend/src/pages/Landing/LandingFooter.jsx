//-------------------------------------------------------//
//  File Name: LandingFooter.jsx
//  Description: Footer Content displayed at the bottom of the page.
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Footer
//
// Created By: Corey Yang-Smith
// Date: October 10th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react'

// MUI Imports
import { AppBar, Toolbar, Typography, Stack } from '@mui/material'

// My Component Imports
import StyledFooterLink from '../../components/StyledFooterLink';

//  GLOBALS & INITIALIZATION
//-------------------------------------------------------//

const toolbarSX = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderTop: '1px solid #bbb'
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFooter = () => {
  return (
    <>
    <AppBar color="background" position='relative' elevation={0} sx={{marginTop: "50px", paddingBottom:"50px"}}>
      <Toolbar variant="regular" sx={toolbarSX}>
        <Stack direction="column" spacing={2} sx={{justifyContent:'center', marginTop:"32px"}}>
          <Typography variant="feature_heading" sx={{textAlign:'center'}}>GOLDNEST</Typography>

          <Stack direction="row" spacing={1}>

            <StyledFooterLink to="/">
              <Typography variant='card_body'>Legal Stuff</Typography>
            </StyledFooterLink>

            <Typography variant='card_body'>|</Typography>   


            <StyledFooterLink to="/">                   
              <Typography variant='card_body'>Privacy Policy</Typography>
            </StyledFooterLink>

            <Typography variant='card_body'>|</Typography>          

            <StyledFooterLink to="/">               
              <Typography variant='card_body'>Security</Typography>   
            </StyledFooterLink>                         
          </Stack>
        </Stack>        
      </Toolbar>
    </AppBar>
    </>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFooter