//-------------------------------------------------------//
//  File Name: Reports.jsx
//  Description: Main Page for Reports
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Reports
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'
import { useState } from 'react';

// MUI Import
import { Box, Grid } from '@mui/material/';
import { Select, MenuItem } from '@mui/material';

// My Components
import DoughnutReport from "./DoughnutReport";
import ExpensesByMainCategory from './ExpensesByMainCategory';
import NetWorthLineChart from './NetWorthLineChart';
import MyD3Component from './MyD3Chart';


//  MAIN FUNCTION 
//-------------------------------------------------------//

const Reports = () => {
    const [selectedTimeSpan, setSelecedTimeSpan] = useState("");
    const [selectedReportType, setSelectedReportType] = useState("");

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedReport, setSelectedReport] = useState("");

    return <>
    <h2>Welcome to My Reports</h2>

    <h3>Step 1) Select Time Span</h3>
    <Select
        value={selectedTimeSpan}
        onChange={(e) => setSelecedTimeSpan(e.target.value)}
        fullWidth
        variant='outlined'
        color='primary'
    >
        <MenuItem value={"year"}>Yearly Report</MenuItem>
        <MenuItem value={"month"}>Monthly Report</MenuItem>
        <MenuItem value={"week"}>Weekly Report</MenuItem>
    </Select>

    <h3>Step 2) Specify Time Range</h3>
    {/* TODO - Dynamically generated select year/month/weekly range based on step 1*/}  

    <h3>Step 3) Select Report Type</h3>
    <Select
        value={selectedReportType}
        onChange={(e) => setSelectedReportType(e.target.value)}
        fullWidth
        variant='outlined'
        color='primary'
    >
        <MenuItem value={"full"}>Full Report</MenuItem>
        <MenuItem value={"general"}>General Report</MenuItem>
        <MenuItem value={"detailed"}>Detailed Report</MenuItem>
        <MenuItem value={"custom"}>Custom Report</MenuItem>        
    </Select>

    <h3>Selected Year</h3>
            <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                fullWidth
                variant='outlined'
                color='primary'
            >
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2024}>2024</MenuItem>
            </Select>


    <h3>Selected Month</h3>
    <Select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        fullWidth
        variant='outlined'
        color='primary'
    >
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
    
    <h3>Select Report</h3>
    <Select
        value={selectedReport}
        onChange={(e) => setSelectedReport(e.target.value)}
        fullWidth
        variant='outlined'
        color='primary'
    >
        <MenuItem value={"yearly-budget-main-summary-doughnut"}>yearly-budget-main-summary-doughnut</MenuItem>
        <MenuItem value={"monthly-budget-main-summary-doughnut"}>monthly-budget-main-summary-doughnut</MenuItem>
    </Select>

    {/* Main Logic */}
    <Grid container spacing={2}>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <DoughnutReport selectedMonth={selectedMonth} 
                                selectedYear={selectedYear}/>
            </Box>
        </Grid>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <ExpensesByMainCategory/>
            </Box>      
        </Grid>     

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <NetWorthLineChart />
            </Box>      
        </Grid>          

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <MyD3Component data = {[10, 20, 30]}/>
            </Box>      
        </Grid>                 
    </Grid>
    </>
}


//  MAIN FUNCTION
//-------------------------------------------------------//

export default Reports;