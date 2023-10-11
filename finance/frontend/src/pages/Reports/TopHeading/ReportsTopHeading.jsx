//-------------------------------------------------------//
//  File Name: ReportsTopHeading.jsx
//  Description: Top Bar for Reports
//
//  Requirements:
//      - Reports.jsx
//
//  Returns:
//      - Top Heading for Dashboard. Contains the following:
//        - Selected Report Type (Input)
//        - Selected Year (Input)
//        - Selected Month (Input)
//
// Created By: Corey Yang-Smith
// Date: October 11th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState } from 'react'

// MUI Imports
import { Paper, Grid, Button, InputLabel, Select, MenuItem, FormControl, Stack, TextField } from '@mui/material'

// My Hooks
import { useCurrentUser } from '../../../hooks/useCurrentUser'

//  UTILITY
//-------------------------------------------------------//
function checkReportType(report) {
  if (report === 'basicMonthly') {
      return true;
  }
  if (report === 'proMonthly') {
      return true;
  }
  if (report === 'powerMonthly') {
    return true;
  }  
}

function checkIfDataFilled(props) {
  if (props.selectedReport === "basicMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    return false;
  else if (props.selectedReport === "proMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    return false;  
  else if (props.selectedReport === "powerMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    return false;    
  else if (props.selectedReport === "basicYearly" && (props.selectedYear !== undefined))
    return false;    
  else if (props.selectedReport === "proYearly" && (props.selectedYear !== undefined))
    return false;      
  else if (props.selectedReport === "powerYearly" && (props.selectedYear !== undefined))
    return false;      

  else
    return true;
}

//  MAIN FUNCTION
//-------------------------------------------------------//

const ReportsTopHeading = (props) => {

  return (
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
      <Grid container>

        {/* Selections */}
        <Grid item xs={12}
          display="flex"
          justifyContent="flex-start"
          alignItems="center">

          <Grid container>
            <Grid item xs={8}>

          {/* Report Type */}
          <FormControl margin='dense'> 
          <TextField  select
                      value={props.selectedReport}
                      onChange={(e) => props.setSelectedReport(e.target.value)}
                      sx={{width: "200px", marginRight: "32px"}}
                      label="Report Type"
                      size="large">          
                      <MenuItem value={"basicMonthly"}>Basic (Monthly)</MenuItem>                    
                      <MenuItem value={"basicYearly"}>Basic (Yearly)</MenuItem>   
                      <MenuItem value={"proMonthly"}>Pro (Monthly)</MenuItem>   
                      <MenuItem value={"proYearly"}>Pro (Yearly)</MenuItem>   
                      <MenuItem value={"powerMonthly"}>Power (Monthly)</MenuItem>   
                      <MenuItem value={"powerYearly"}>Power (Yearly)</MenuItem> 
                      <MenuItem value={"custom"}>Custom</MenuItem>                                                                                                     
            </TextField>
          </FormControl>

          {/* Selected Year */}
          {props.selectedReport !== undefined && (
          <FormControl margin='dense'> 
          <TextField  select
                      value={props.selectedYear}
                      onChange={(e) => props.setSelectedYear(e.target.value)}
                      sx={{width: "200px", marginRight: "32px"}}
                      label="Year"
                      size="large">     
                      <MenuItem value={2022}>2022</MenuItem>                    
                      <MenuItem value={2023}>2023</MenuItem>   
                      <MenuItem value={2024}>2024</MenuItem>                                                                                                  
            </TextField>
          </FormControl>
          )}

          {/* Selected Month */}
          {checkReportType(props.selectedReport) && (
          <FormControl margin='dense'>  
          <TextField  select
                      value={props.selectedMonth}
                      onChange={(e) => props.setSelectedMonth(e.target.value)}
                      sx={{width: "200px", marginRight: "32px"}}
                      label="Month"
                      size="large">     
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
            </TextField>
          </FormControl>
          )}          
            </Grid>

          {/* Buttons */}
          <Grid item xs ={4}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center">
              <Stack direction="row" spacing={2}>
                <Button variant='contained' size='large' color="primary" disabled={checkIfDataFilled(props)}>Export to CSV</Button>
                <Button variant='contained' size='large' color="primary" disabled={checkIfDataFilled(props)}>Save to PDF</Button>  
              </Stack>                      
          </Grid>          
        </Grid>
      </Grid>
    </Grid>
    </Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default ReportsTopHeading