//-------------------------------------------------------//
//  File Name: DashboardTopHeading.jsx
//  Description: Top Bar for Dashboard
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Top Heading for Dashboard. Contains the following:
//        - User's Name
//        - Today's Date
//        - Selected Year (Input)
//        - Selected Month (Input)
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState } from 'react'

// MUI Imports
import { Paper, Grid, Stack, Typography, Select, MenuItem } from '@mui/material'

// My Hooks
import { useCurrentUser } from '../../../hooks/useCurrentUser'


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardTopHeading = (props) => {

  // Custom Hooks
  const { currentUser } = useCurrentUser();

  return (
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
      <Grid container>

        {/* Main User Info */}
        <Grid item xs={4}  display="flex" alignItems="center">
          <Stack direction="column"
                  display="flex"
                  justifyContent="center">
            <Typography variant='dashboard_card_heavy'>Hello, {currentUser.first_name} {currentUser.last_name}</Typography>
            <Typography variant='dashboard_card_light'>Today is Sunday, October 23rd 2023</Typography>
          </Stack>
        </Grid>

        {/* Selections */}
        <Grid item xs={8}
          display="flex"
          justifyContent="flex-end"
          alignItems="center">

          <Select value={props.selectedYear}
                  onChange={(e) => props.setSelectedYear(e.target.value)}
                  sx={{width: "200px", marginRight: "32px"}}>
                    <MenuItem value={2022}>2022</MenuItem>                    
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>                    
          </Select>

          <Select value={props.selectedMonth}
                  onChange={(e) => props.setSelectedMonth(e.target.value)}
                  sx={{width: "200px"}}>
                    <MenuItem value={1}>January</MenuItem>                    
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>    
                    <MenuItem value={4}>April</MenuItem>                    
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>   
                    <MenuItem value={7}>July</MenuItem>                    
                    <MenuItem value={8}>August</MenuItem>
                    <MenuItem value={9}>September</MenuItem>   
                    <MenuItem value={10}>October</MenuItem>                    
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>December</MenuItem>                                                                               
          </Select>          


        </Grid>


      </Grid>

    </Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardTopHeading