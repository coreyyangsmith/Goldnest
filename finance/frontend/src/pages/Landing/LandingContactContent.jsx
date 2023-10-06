//-------------------------------------------------------//
//  File Name: LandingContactContent.jsx
//  Description: Centered Contact Content displayed on Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Contact Content Block
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React from 'react'

// MUI Imports
import { Typography, Paper, Stack, Box } from '@mui/material'

// React Router Dom Import
import { Link } from 'react-router-dom'

// Assets Imports
import Dashboard from '../../assets/images/Dashboard.png'
import WindowBackground from '../../assets/images/WindowBackground.png'


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingContactContent = () => {
  return (
<Paper sx={{padding: "32px"}}>
    <Typography>Contact</Typography>

</Paper>

    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingContactContent