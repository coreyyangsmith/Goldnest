//-------------------------------------------------------//
//  File Name: ReportManager.jsx
//  Description: Manager Components for Reports
//
//  Parnets:
//      - Reports.jsx
//
//  Requirements:
//      - selectedYear (prop)
//      - selectedMonth (prop, optional)
//      - selectedWeek (prop, optional)
//      - selectedTimeSpan (prop)
//      - selectedReportType (prop)
//
//  Returns:
//      - Renders sub-components dependant on selectedReportType
//
// Created By: Corey Yang-Smith
// Date: October 3rd, 2023
//-------------------------------------------------------//


//  IMPORTS 
//-------------------------------------------------------//

// React Imports
import React from 'react'

// MUI Imports
import { Box, Grid } from '@mui/material/';

// My Components
import DoughnutYearlyBudget from "./DoughnutYearlyBudget";
import DoughnutYearlyEntry from "./DoughnutYearlyEntry";
// import ExpensesByMainCategory from './ExpensesByMainCategory';
// import NetWorthLineChart from './NetWorthLineChart';
// import MyD3Component from './MyD3Chart';

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport'


//  MAIN FUNCTION 
//-------------------------------------------------------//

const ReportManager = (props) => {
  // My Custom Hooks
  const { mainCategories } = useMainCategory();
  const { budgets } = useBudget();
  const { entries } = useEntries();

  console.log("report manager")
  console.log(mainCategories);
  console.log(budgets);
  console.log(entries);



  return (
<>
    <Grid container spacing={2}>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <DoughnutYearlyBudget   selectedMonth={props.selectedMonth} 
                                        selectedYear={props.selectedYear}
                                        mainCategories={mainCategories}
                                        budgets={budgets}/>
            </Box>
        </Grid>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <DoughnutYearlyEntry    selectedMonth={props.selectedMonth} 
                                        selectedYear={props.selectedYear}
                                        mainCategories={mainCategories}
                                        entries={entries}/>
            </Box>
        </Grid>        

        {/* 
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
        */}

    </Grid>
</>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default ReportManager