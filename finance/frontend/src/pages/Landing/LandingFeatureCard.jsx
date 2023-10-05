//-------------------------------------------------------//
//  File Name: LandingFeatureCard.jsx
//  Description: Centered Feature Content displayed on Landing Page
//
//  Requirements:
//      - LandingFeatureContent.jsx
//
//  Returns:
//      - Feature Card
//
// Created By: Corey Yang-Smith
// Date: October 5th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React from 'react'

// MUI Imports
import { Typography, Stack, Paper } from '@mui/material'

// Assets Imports


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureCard = (props) => {
  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150",
                                        padding:"32px"}}>
    <Stack direction="column">
        <Typography variant='card_heading'>{props.headingText}</Typography>
        <Typography variant='card_body'>{props.descriptionText}</Typography>
        <Typography variant='card_link'>Learn More...</Typography>                
    </Stack>

</Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureCard