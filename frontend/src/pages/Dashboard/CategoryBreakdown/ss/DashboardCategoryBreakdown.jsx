//-------------------------------------------------------//
//  File Name: DashboardCategoryBreakdown.jsx
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
import React, { useState, useEffect } from "react";

// MUI Imports
import { Divider, Paper, Stack, Typography } from "@mui/material";

// My Imports
import DashboardCategoryStackedBar from "./DashboardCategoryStackedBar";

//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardCategoryBreakdown = (props) => {
  return (
    <>
      {/* Main Panel */}
      <Paper
        sx={{
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
        elevation={4}
      >
        <Typography variant="dashboard_heading">Category Breakdown</Typography>
        <Divider />
        <DashboardCategoryStackedBar
          selectedYear={props.selectedYear}
          selectedMonth={props.selectedMonth}
          entries={props.entries}
          budgets={props.budgets}
          mainCategories={props.mainCategories}
        />
      </Paper>
    </>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default DashboardCategoryBreakdown;
