//-------------------------------------------------------//
//  File Name: DashboardToDateSmallCard.jsx
//  Description: Paper for tiny card to display text and current/remaining budgets/expenses to date
//
//  Requirements:
//      - DashboardBudgetOverview.jsx
//
//  Returns:
//      - Tiny Styled Card
//
// Created By: Corey Yang-Smith
// Date: October 8th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Import
import { Paper, Stack, Typography, Box } from '@mui/material'

//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardToDateSmallCard = (props) => {
  return (
    <>
    <Box sx={{marginLeft: "32px"}}>
        <Paper sx={{paddingLeft:"4px", paddingRight:"4px", paddingTop:"8px", paddingBottom:"8px"}} 
                elevation={2}>
            <Stack direction="column" 
                    width="150px"
                    display="flex"
                    justifyContent="center"
                    alignItems="flex-start">
                <Typography paddingLeft="16px" variant='dashboard_small_card_heavy'>{props.title.toUpperCase()}</Typography>
                <Typography paddingLeft="16px" variant='dashboard_card_light'>${props.number}/day</Typography>  
                <Typography paddingLeft="16px" variant='dashboard_card_light'>({props.percentage}%)</Typography>
            </Stack>                    
        </Paper>    
        </Box>             
    </>
  )
}

//  EXPORTS
//-------------------------------------------------------//

export default DashboardToDateSmallCard