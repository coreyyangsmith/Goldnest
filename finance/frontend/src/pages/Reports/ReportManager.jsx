//-------------------------------------------------------//
//  File Name: ReportManager.jsx
//  Description: Manager Components for Reports
//
//  Parnets:
//      - Reports.jsx
//
//  Requirements:
//      - selectedReportType (prop)
//      - selectedYear (prop)
//      - selectedMonth (prop, optional)
//
//  Returns:
//      - Renders sub-components dependant on selectedReportType
//
// Created By: Corey Yang-Smith
// Date: October 3rd, 2023
// Updated: October 11th, 2023
//-------------------------------------------------------//


//  IMPORTS 
//-------------------------------------------------------//

// React Imports
import React from 'react'

// MUI Imports
import { Box, Grid } from '@mui/material/';

// My Components
import YearSunburstBudget from './BasicReport/YearSunburstBudget'
import YearSunburstEntry from './BasicReport/YearSunburstEntry';
import MonthSunburstBudget from './BasicReport/MonthSunburstBudget';
import MonthSunburstEntry from './BasicReport/MonthSunburstEntry';

//  MAIN FUNCTION 
//-------------------------------------------------------//

const ReportManager = (props) => {
  // My Custom Hooks

  function GenerateReport(props) {
    // BASIC MONTHLY - TODO
    if (props.selectedReport === "basicMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    {
      console.log("generate basic monthly")
      return <>
      <Grid item xs={6}>
        <MonthSunburstBudget  budget={props.budget}
                              selectedYear={props.selectedYear}
                              selectedMonth={props.selectedMonth}
                              mainCategories={props.mainCategories}
                              subCategories={props.subCategories}/>           
      </Grid>      

      <Grid item xs={6}>
      <MonthSunburstEntry   entries={props.entries}
                            selectedYear={props.selectedYear}
                            selectedMonth={props.selectedMonth}
                            mainCategories={props.mainCategories}
                            subCategories={props.subCategories}/>    
        
      </Grid>      
      </>
    }

    // BASIC YEARLY - WIP
    if (props.selectedReport === "basicYearly" && (props.selectedYear !== undefined))
    {
      return <>
      <Grid item xs={6}>
        <YearSunburstBudget budget={props.budget}
                            selectedYear={props.selectedYear}
                            mainCategories={props.mainCategories}
                            subCategories={props.subCategories}/>
      </Grid>
    
      <Grid item xs={6}>
      <YearSunburstEntry    entries={props.entries}
                            selectedYear={props.selectedYear}
                            mainCategories={props.mainCategories}
                            subCategories={props.subCategories}/>    
        
      </Grid>
      </>      
    }

    // PRO MONTHLY - TODO
    if (props.selectedReport === "proMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    {
      console.log("generate pro monthly")
    }

    // PRO YEARLY - TODO
    if (props.selectedReport === "proYearly" && (props.selectedYear !== undefined))
    {
      console.log("generate pro yearly")      
    }    

    // POWER MONTHLY - TODO
    if (props.selectedReport === "powerMonthly" && (props.selectedYear !== undefined && props.selectedMonth !== undefined))
    {
      console.log("generate power monthly")
    }

    // POWER YEARLY - TODO
    if (props.selectedReport === "powerYearly" && (props.selectedYear !== undefined))
    {
      console.log("generate power yearly")
    }

    // CUSTOM - TODO
    // TODO ADVANCED CUSTOM PANEL
  }
  
  return (
<>
<Grid container spacing={2}>
    {GenerateReport(props)}

</Grid>
</>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default ReportManager