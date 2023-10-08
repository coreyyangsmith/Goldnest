//-------------------------------------------------------//
//  File Name: DashboardBudgetOverview.jsx
//  Description: Paper to display today's date, and some info about this month.
//              Displays Budget and current Expenses-to-date for the current selected month
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Main Page for Dashboard
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';

// MUI Imports
import { Divider, Paper, Stack, Typography } from "@mui/material";

// My Componens
import DashboardMainCategorySmallPanel from './DashboardMainCategorySmallPanel'

// My Custom Components
import CustomSlider from "../../../components/CustomSlider"


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardBudgetOverview = (props) => {

    const myMainCategories = props.mainCategories.map((value, index) => {
    
        return  <React.Fragment>
            <DashboardMainCategorySmallPanel mainCategory={value}
                                            entries={props.entries}
                                            budgets={props.budgets}/>
        </React.Fragment>
      })   

    const date = new Date();

    let month = date.toLocaleString('en-US', { month: 'long' }); 
    let year = date.getFullYear();
    let today = date.getDate();

    let daysInMonth =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();    
    let timeLeft = daysInMonth - today


    // Slide Info
    const budgetMarks = [
        {
            value: 20,
            label: '$500',
        },        
        {
            value: 100,
            label: '$2500',
        }
    ]

    const expenseMarks = [
        {
            value: 25,
            label: '$625',
        },        
        {
            value: 100,
            label: '$2500',
        }
    ]    

    return (
    <>
    {/* Main Panel */}
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
        <Typography variant="dashboard_heading">Budget Overview</Typography>
        <Divider/>

        <Stack direction='column' spacing={2}>
            <Divider/>

            {/* Budget Slider */}      
            <Stack direction="row" spacing={1}>
                <Typography>Budget Estimate</Typography>
          
                <CustomSlider disabled 
                                marks={budgetMarks} 
                                defaultValue={20}/>

                <Stack direction="column" width="175px">
                    <Typography paddingLeft="24px">$50.00/day</Typography>  
                    <Typography paddingLeft="24px">(20% utilized)</Typography>              
                </Stack> 
            </Stack>    

            {/* Expenses Slider */}  
            <Stack direction="row" spacing={2}>
                <Typography>Actual Expenses</Typography>
                <CustomSlider disabled 
                                marks={expenseMarks} 
                                defaultValue={25}/>

                <Stack direction="column" width="175px">
                    <Typography paddingLeft="24px">$62.50/day</Typography>  
                    <Typography paddingLeft="24px">(25% utilized)</Typography>              
                </Stack>                       
            </Stack>        

            {/* Main Categories Box */}  
            <Paper sx={{background: "#FCFCFC", paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}}>
                <Stack direction="column">
                    <Typography>Main Categories</Typography>
                    <Stack direction="row" spacing={1} sx={{overflowY: 'hidden', paddingTop: "16px", paddingBottom: "16px"}}>
                        {myMainCategories}
                    </Stack>
                </Stack>
            </Paper>    


      
        </Stack>         
    </Paper>    
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardBudgetOverview;