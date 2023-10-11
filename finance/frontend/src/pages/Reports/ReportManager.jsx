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

//  MAIN FUNCTION 
//-------------------------------------------------------//

const ReportManager = (props) => {
  // My Custom Hooks
  
  return (
<>
<Grid container>
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

  <Grid item xs={4}>
    
  </Grid>    

</Grid>
</>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default ReportManager