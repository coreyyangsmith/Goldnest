//-------------------------------------------------------//
//  File Name: DashboardInfoPanel.jsx
//  Description: Paper to display today's date, and some info about this month.
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Main Page for Dashboard
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//

import { Paper, Stack, Typography } from "@mui/material";


//  IMPORTS
//-------------------------------------------------------//
// NA


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardInfoPanel = () => {
    const date = new Date();

    let month = date.toLocaleString('en-US', { month: 'long' }); 
    let year = date.getFullYear();
    let today = date.getDate();

    let daysInMonth =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();    
    let timeLeft = daysInMonth - today

    return (
    <>
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}}>
        <Stack>
        <Typography variant="h1">Today is {month} {today} {year}</Typography>
        <Typography variant="h2">Days remaining: {timeLeft}</Typography>  
        <Typography>Spend this Month: $x</Typography>
        <Typography>Budget Remaining: $x</Typography>        
        </Stack>         
    </Paper>    
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardInfoPanel;