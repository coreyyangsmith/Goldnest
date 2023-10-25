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
// Date: October 6th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// MUI Imports
import { Divider, Paper, Stack, Typography } from "@mui/material";
import CustomSlider from "../../../../components/CustomSlider";

//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardBudgetOverview = () => {
  const date = new Date();

  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();
  let today = date.getDate();

  let daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  let timeLeft = daysInMonth - today;

  // Slide Info
  const marks = [
    {
      value: 100,
      label: "$2500",
    },
  ];

  return (
    <>
      <Paper
        sx={{
          paddingLeft: "32px",
          paddingRight: "32px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Typography variant="dashboard_heading">Budget Overview</Typography>
        <Divider />

        <Stack direction="column" spacing={2}>
          <Typography variant="h1">
            Today is {month} {today} {year}
          </Typography>
          <Typography variant="h2">Days remaining: {timeLeft}</Typography>
          <Divider />

          <CustomSlider marks={marks} defaultValue={20} disabled style={{}} />

          <Typography>Average Daily Spend This Month: $82.23</Typography>
          <Typography>Budget Daily Spend Remaining: $30.23</Typography>
        </Stack>
      </Paper>
    </>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default DashboardBudgetOverview;
