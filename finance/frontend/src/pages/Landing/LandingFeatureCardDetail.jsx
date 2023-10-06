//-------------------------------------------------------//
//  File Name: LandingFeatureCardDetail.jsx
//  Description: Large Card for further description on available features
//
//  Requirements:
//      - LandingFeatureContent.jsx
//
//  Returns:
//      - Detailed Feature Card
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Import
import { Paper, Stack, Typography } from '@mui/material'

// My Imports
import CardLink from '../../components/CardLink'

//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureCardDetail = (props) => {
  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150px",
                                        padding:"32px"}}>
    <Stack direction="column" paddingTop={3} paddingBottom={3}>
        {props.icon}
        <Typography variant='card_heading' paddingTop={2}>{props.headingText}</Typography>
        <Typography variant='card_body'>{props.descriptionText}</Typography>
        <CardLink to={props.path}><Typography variant='card_link' paddingTop={2}>Learn More ➥</Typography></CardLink>               
    </Stack>

</Paper>
  )
}

export default LandingFeatureCardDetail