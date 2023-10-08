//-------------------------------------------------------//
//  File Name: DashboardSpendingOverview.jsx
//  Description: To display line chart for the selected year/month, detailing and expenses throughout the month
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Chart Paper for Dashboard
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
import DashboardMainCategorySmallPanel from '../BudgetOverview/DashboardMainCategorySmallPanel'

// My Custom Components
import CustomSlider from "../../../components/CustomSlider"


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardSpendingOverview = (props) => {

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
        <Typography variant="dashboard_heading">Spending Overview</Typography>
        <Divider/>    
    </Paper>    
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardSpendingOverview;