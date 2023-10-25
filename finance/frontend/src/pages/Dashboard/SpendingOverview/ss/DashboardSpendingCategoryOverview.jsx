//-------------------------------------------------------//
//  File Name: DashboardSpendingCategoryOverview.jsx
//  Description: To display line chart for the selected year/month, detailing and expenses throughout the month
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Chart Paper for Dashboard
//
// Created By: Corey Yang-Smith
// Date: October 9th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from "react";

// MUI Imports
import { Divider, Paper, Typography } from "@mui/material";

// My Componens
import DashboardBudgetExpensesCategoryLineChart from "./DashboardBudgetExpensesCategoryLineChart";

//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardSpendingCategoryOverview = (props) => {
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
        <Typography variant="dashboard_heading">
          Spending Overview by Category
        </Typography>
        <Divider />
        <DashboardBudgetExpensesCategoryLineChart
          selectedYear={props.selectedYear}
          selectedMonth={props.selectedMonth}
          entries={props.entries}
          budgets={props.budgets}
          selectedMain={props.selectedMain}
        />
      </Paper>
    </>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default DashboardSpendingCategoryOverview;
