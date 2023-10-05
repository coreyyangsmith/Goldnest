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
import VBarYearBudgetEntry from './VBarYearBudgetEntry';
import VBarYearBudgetEntryCategory from './VBarYearBudgetEntryCategory';
import SunburstEChartsExample from './samples/SunburstEChartsExample';
import StackedVBarEChartsExample from './samples/StackedVBarEChartsExample';
import StackedHBarEChartsExample from './samples/StackedHBarEChartsExample';
import TreechartEChartsExample from './samples/TreechartEChartsExample';
import GradientStackedEChartsExample from './samples/GradientStackedEChartsExample';

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport'
import VHeatMapEChartsExample from './samples/VHeatMapEChartsExample';
import CalendarIconEChartsExample from './samples/CalendarIconEChartsExample';
import MonthHeatMapEChartsExample from './samples/MonthHeatMapEChartsExample';


//  MAIN FUNCTION 
//-------------------------------------------------------//

const ReportManager = (props) => {
  // My Custom Hooks
  const { mainCategories } = useMainCategory();
  const { budgets } = useBudget();
  const { entries } = useEntries();


  
  return (
<>
    <Grid container spacing={4}
    alignItems="center"
    justifyContent="center"
    direction="row">

        <Grid item xs={6} >
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <DoughnutYearlyBudget   selectedMonth={props.selectedMonth} 
                                        selectedYear={props.selectedYear}
                                        mainCategories={mainCategories}
                                        budgets={budgets}/>
            </Box>
        </Grid>

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <DoughnutYearlyEntry    selectedMonth={props.selectedMonth} 
                                        selectedYear={props.selectedYear}
                                        mainCategories={mainCategories}
                                        entries={entries}/>
            </Box>
        </Grid>     

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <VBarYearBudgetEntry    entries={entries}
                                        budgets={budgets}
                                        selectedYear={props.selectedYear}/>
            </Box>
        </Grid>       

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <VBarYearBudgetEntryCategory    entries={entries}
                                                budgets={budgets}
                                                selectedYear={props.selectedYear}
                                                selectedMain={mainCategories[2]}/>
            </Box>  
        </Grid>                  

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <SunburstEChartsExample/>
            </Box>  
        </Grid>   

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <StackedVBarEChartsExample/>
            </Box>  
        </Grid>           
        
        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <StackedHBarEChartsExample/>
            </Box>  
        </Grid>       

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <TreechartEChartsExample/>
            </Box>  
        </Grid>     

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <VHeatMapEChartsExample/>
            </Box>  
        </Grid>  

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <GradientStackedEChartsExample/>
            </Box>  
        </Grid>                          

        <Grid item xs={6}>
            <Box sx={{
                width: 1,
                height: 1
            }}>
                <MonthHeatMapEChartsExample/>
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