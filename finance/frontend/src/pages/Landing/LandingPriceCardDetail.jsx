//-------------------------------------------------------//
//  File Name: LandingPriceCardDetail.jsx
//  Description: Large Card for further description on available price options
//
//  Requirements:
//      - ModalPriceCardDetail.jsx
//
//  Returns:
//      - Detailed Price Card
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Import
import { Divider, Paper, Stack, Typography, Chip, Box, Button, Grid } from '@mui/material'

// MUI Icon Import
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingPriceCardDetail = (props) => {

  // Maps the Features and their Description to the Horizontal Stack Items
  const myFeaturesTitle = props.features.map((value, index) => {
    const myFeaureDescription = props.featureDescriptions[index];

    return  <React.Fragment>
        <Stack direction="row">
          <CheckCircleOutlineIcon color="primary"/>
          <Typography paddingLeft={2} variant='prices_card_heading'>{value}</Typography>
          <Typography paddingLeft={1} variant='prices_card_body'>{myFeaureDescription}</Typography>
        </Stack>
    </React.Fragment>
  })   

return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150px",
                                        padding:"32px"}}>

    <Chip label={props.tierText} size='small' sx={{paddingLeft:"4px", paddingRight:"4px", marginBottom: "16px", marginTop: "24px", background: props.tierColor, color: props.tierTextColor}}/>                                        
    <Stack direction="column" spacing={2} marginBottom="16px">
      <Typography variant='feature_heading'>{props.priceAmount}</Typography>
      <Typography variant='hero_content'>{props.priceText}</Typography>
    </Stack>    

    <Divider/>

    <Stack direction="column" spacing={2} marginTop="16px">
      {myFeaturesTitle}  
    </Stack>

    
    {/* Botom Button Grid */}
    <Grid container spacing={2}>

        {/* Close Button */}
        <Grid item xs={2}>
          <Box paddingTop={2}>

            <Button   fullWidth 
                      variant='contained' 
                      color="grey"  sx={{paddingTop: "8px", paddingBottom: "8px"}}
                      onClick={props.handleClose}                                  
            >
              Close
            </Button>
          </Box>    
        </Grid>     

        {/* Call to Action Button */}
        <Grid item xs={10}>
          <Box paddingTop={2}>
            <Button   fullWidth 
                      variant='contained' 
                      alignItems="center" alignContent="center"                  
                      color={props.cardBtnColor} sx={{paddingTop: "8px", paddingBottom: "8px"}}                  
            >
              {props.cardBtnText}        
            </Button>
          </Box>          
        </Grid>

      </Grid>
</Paper>
  )
}

export default LandingPriceCardDetail