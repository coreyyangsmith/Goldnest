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
import { Typography, Stack, Paper, Button, Chip, Divider, Box } from '@mui/material'

// MUI Icons Imports
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Imports
import { Link } from 'react-router-dom'
import CardLink from '../../components/CardLink'


// UTILITY
//-------------------------------------------------------//




//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingPriceCard = (props) => {

  const myFeatures = props.features.map(feat => {
    return  <React.Fragment key={feat.id}>
        <Stack direction="row">
          <CheckCircleOutlineIcon color="primary"/>
          <Typography paddingLeft={2} variant='prices_list'>{feat}</Typography>
        </Stack>

    </React.Fragment>
  })


  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"200px",
                                        width:"375px",
                                        padding:"32px"}}>

    <Chip label={props.tierText} size='small' sx={{paddingLeft:"4px", paddingRight:"4px", marginBottom: "8px", background: props.tierColor, color: props.tierTextColor}}/>                                      
    <Stack direction="column" spacing={1}>
      <Typography variant='prices_heading'>{props.priceAmount}</Typography>
      <Typography variant='card_body'>{props.priceText}</Typography>    
    </Stack>    
    
    <Stack direction="column" spacing={2} marginTop={2}>

      <Divider/>
        {myFeatures}
        <Box paddingTop={2}>
          <Button fullWidth variant='contained' color={props.btnColor} sx={{paddingTop: "8px", paddingBottom: "8px"}}>{props.btnText}</Button>
        </Box>      
    </Stack>

</Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingPriceCard