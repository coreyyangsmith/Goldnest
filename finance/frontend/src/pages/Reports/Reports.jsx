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
import React, { useEffect } from 'react'
import { useState } from 'react';

// MUI Import
import { Container } from '@mui/material/';
import { Select, MenuItem } from '@mui/material';
import { Button } from '@mui/material/'

// My Components
import ReportManager from './ReportManager';


//  MAIN FUNCTION 
//-------------------------------------------------------//

const Reports = () => {
    const [selectedTimeSpan, setSelecedTimeSpan] = useState("");

    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedWeek, setSelectedWeek] = useState("");    

    const [selectedReportType, setSelectedReportType] = useState("");

    const [generateReport, setGenerateReport] = useState(false);

    const handleClick = () => {
        console.log("generate report")
        setGenerateReport(true);
    }

    // Initial Conditions
    useEffect(() => {
        console.log("useEffect");
        setGenerateReport(false)
    }, [])

    return <>
    <Container sx={{marginLeft: 5, marginRight: 5}}>
        <h2>Welcome to My Reports</h2>

        {/* Step 1 - Specified Time Span */}
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

        {/* Step 2 - Specified Time Range */}
        {selectedTimeSpan === 'year' && (
        <>     
            <h3>Step 2) Specify Time Range</h3>   
            <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            fullWidth
            variant='outlined'
            color='primary'
            >
                <MenuItem value={"2022"}>2022</MenuItem>
                <MenuItem value={"2023"}>2023</MenuItem>
                <MenuItem value={"2024"}>2024</MenuItem> 
            </Select>
        </>
        )}

        {selectedTimeSpan === 'month' && (
        <>        
            <h3>Step 2) Specify Time Range</h3>    
            <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            fullWidth
            variant='outlined'
            color='primary'
            placeholder='Selected Year'
            >
                <MenuItem value={"2022"}>2022</MenuItem>
                <MenuItem value={"2023"}>2023</MenuItem>
                <MenuItem value={"2024"}>2024</MenuItem>                                               
            </Select>            

            <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            fullWidth
            variant='outlined'
            color='primary'
            placeholder='Selected Month'
            >
                <MenuItem value={"January"}>January</MenuItem>
                <MenuItem value={"February"}>February</MenuItem>
                <MenuItem value={"March"}>March</MenuItem> 
                <MenuItem value={"April"}>April</MenuItem>
                <MenuItem value={"May"}>May</MenuItem>
                <MenuItem value={"June"}>June</MenuItem> 
                <MenuItem value={"July"}>July</MenuItem>
                <MenuItem value={"August"}>August</MenuItem>
                <MenuItem value={"September"}>September</MenuItem> 
                <MenuItem value={"October"}>October</MenuItem>
                <MenuItem value={"November"}>November</MenuItem>
                <MenuItem value={"December"}>December</MenuItem>                                                 
            </Select>
        </>
        )}

        {selectedTimeSpan === 'week' && (
        <>        
            <h3>Step 2) Specify Time Range</h3>        
            <Select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            fullWidth
            variant='outlined'
            color='primary'
            placeholder='Selected Week'
            >
                <MenuItem value={"W1"}>Week 1 (Jan 1 - Jan 7)</MenuItem>
                <MenuItem value={"W2"}>Week 2 (Jan 8 - Jan 14)</MenuItem>                                             
            </Select>
        </>
        )}            

        {/* Step 3 - Specified Report Type */}
        {selectedYear !== "" && (
        <>
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
        </>  
        )}

        {/* Step 4 - Generate! */}        
        {selectedReportType !== "" && (
        <>
                <Button type="submit"
                fullWidth
                color="secondary"
                variant="outlined"
                sx={{padding:1.5, marginTop:3}}
                onClick={() => handleClick()}>
                            Generate Report
                </Button>   
        </>
        )}

        {/* Step 5 - Logic and Manager */}
        {generateReport === true && (
        <>
        <ReportManager  selectedYear={selectedYear}
                        selectedMonth={selectedMonth}
                        selectedWeek={selectedWeek}
                        selectedTimeSpan={selectedTimeSpan}
                        selectedReportType={selectedReportType}
                        />
        </>        

        )}
        {/* 
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
        */}        

    </Container>    
    </>
}


//  EXPORTS
//-------------------------------------------------------//

export default Reports;