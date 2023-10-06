//-------------------------------------------------------//
//  File Name: LandingPriceCard.jsx
//  Description: Centered Price Content displayed on Landing Page
//
//  Requirements:
//      - LandingPriceContent.jsx
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
import { Typography, Stack, Paper, Button } from '@mui/material'

// MUI Icons Imports
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Imports
import { Link } from 'react-router-dom'
import CardLink from '../../components/CardLink'


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingPriceCard = (props) => {
  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150px",
                                        padding:"32px"}}>
    <Stack direction="column" paddingTop={3} paddingBottom={3} spacing={2}>
        Basic
        <Stack direction="row">
          <CheckCircleOutlineIcon/>
          <Typography paddingLeft={2} variant='card_heading'>Basic Analytics</Typography>
        </Stack>

        <Typography variant='card_body'>{props.descriptionText}</Typography>
        <Button variant='contained' paddingTop={4}>Get Started</Button>
    </Stack>

</Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingPriceCard