//-------------------------------------------------------//
//  File Name: LandingFeatureCardDetail.jsx
//  Description: Large Card for further description on available features
//
//  Requirements:
//      - ModalFeatureCardDetail.jsx
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
import { Divider, Paper, Stack, Typography, Chip } from '@mui/material'

// MUI Icon Import
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


// My Imports
import CardLink from '../../components/CardLink'

//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureCardDetail = (props) => {

  const myBasicFeatures = props.basicFeatures.map(feat => {
    return  <React.Fragment>
        <Stack direction="row">
          <CheckCircleOutlineIcon color="primary"/>
          <Typography paddingLeft={2} variant='prices_list'>{feat}</Typography>
        </Stack>
    </React.Fragment>
  })

  const myProFeatures = props.proFeatures.map(feat => {
    return  <React.Fragment>
        <Stack direction="row">
          <CheckCircleOutlineIcon color="primary"/>
          <Typography paddingLeft={2} variant='prices_list'>{feat}</Typography>
        </Stack>
    </React.Fragment>
  })
  
  const myPowerFeatures = props.powerFeatures.map(feat => {
    return  <React.Fragment>
        <Stack direction="row">
          <CheckCircleOutlineIcon color="primary"/>
          <Typography paddingLeft={2} variant='prices_list'>{feat}</Typography>
        </Stack>
    </React.Fragment>
  })  

  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150px",
                                        padding:"32px"}}>
    <Stack direction="row" spacing={2} alignItems='center' marginBottom="16px">
        {props.largeIcon}
        <Typography variant='feature_heading'>{props.detailHeadingText}</Typography>
    </Stack>    
    <Divider/>

    <Chip label="Basic" size='small' sx={{paddingLeft:"4px", paddingRight:"4px", marginBottom: "16px", marginTop: "24px", background: "#dbdbdb", color:"#5c5c5c"}}/>                                      
    <Stack direction="column" spacing={1.5}>
      {myBasicFeatures}
    </Stack>

    <Chip label="Pro" size='small' sx={{paddingLeft:"4px", paddingRight:"4px", marginBottom: "16px", marginTop: "24px", background: "#F2EEC8", color:"#C9A800"}}/>                                      
    <Stack direction="column" spacing={1.5}>
      {myProFeatures}
    </Stack>    

    <Chip label="Power" size='small' sx={{paddingLeft:"4px", paddingRight:"4px", marginBottom: "16px", marginTop: "24px", background: "#A7E4F8", color:"#2593F9"}}/>                                          
    <Stack direction="column" spacing={1.5}>    
      {myPowerFeatures}
    </Stack>    
    <button onClick={props.handleClose}>Close</button>   



</Paper>
  )
}

export default LandingFeatureCardDetail