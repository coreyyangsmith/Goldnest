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
import DashboardBudgetExpensesLineChart from '../SpendingOverview/DashboardBudgetExpensesLineChart'

// My Custom Components
import CustomSlider from "../../../components/CustomSlider"


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardSpendingOverview = (props) => {
    return (
    <>
    {/* Main Panel */}
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
        <Typography variant="dashboard_heading">Spending Overview</Typography>
        <Divider/>    
        <DashboardBudgetExpensesLineChart   selectedYear={props.selectedYear}
                                            selectedMonth={props.selectedMonth}
                                            entries={props.entries}
                                            budgets={props.budgets}/>
    </Paper>    
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardSpendingOverview;