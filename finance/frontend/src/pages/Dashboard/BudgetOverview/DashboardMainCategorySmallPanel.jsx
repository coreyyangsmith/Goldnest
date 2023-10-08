//-------------------------------------------------------//
//  File Name: DashboardCategorySmallPanel.jsx
//  Description: Focus Card for Main Categories, displayed on Dasboard
//
//  Requirements:
//      - DashboardBudgetOverview.jsx
//
//  Returns:
//      - Tiny Panel for Main Categories
//
// Created By: Corey Yang-Smith
// Date: October 8th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react'

// MUI Imports
import { Box, Paper, Stack, Typography } from '@mui/material';

// MUI Icon Import
import PaidIcon from '@mui/icons-material/Paid'; //TEMPORARY


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardMainCategorySmallPanel = (props) => {

  // My Hooks 
  const [summedEntries, setSummedEntries] = useState(0)
  const [summedBudget, setSummedBudget] = useState(0)

  // Load Budget & Entry Data, and Sum based on selected year/month
  useEffect(() => {

    // Entries
    // Set summedEntries for Selected Year/Month
    const entriesForYear = props.entries.filter(function(row) {
      return row.year == 2023;
    })

    const entiresByMonth = entriesForYear.filter(function(row) {
      return row.month == 10;
    })

    const filteredEntries = entiresByMonth.filter((entry) => {
      return entry.main_category.name === props.mainCategory.name;
    });

    const mySummedEntries = filteredEntries.reduce((total, entry) => total + entry.expense, 0);

    const myRoundedEnties = Math.round(mySummedEntries);
    
    setSummedEntries(myRoundedEnties)

    // Budget
    // Set summedBudget for Selected Year/Month
    const budgetForYear = props.budgets.filter(function(row) {
      return row.year == 2023;
    })

    const budgetByMonth = budgetForYear.filter(function(row) {
      return row.month == 10;
    })

    const filteredBudgets = budgetByMonth.filter((entry) => {
      return entry.sub_category.main_category.name === props.mainCategory.name;
    });

    const mySummedBudget = filteredBudgets.reduce((total, entry) => total + entry.amount, 0);

    const myRoundedBudget = Math.round(mySummedBudget);
    
    setSummedBudget(myRoundedBudget)

  }, [props])



  return (
    <React.Fragment key={props.id}>
      <Paper sx={{paddingLeft:"16px", 
                  paddingRight:"16px", 
                  paddingTop:"16px", 
                  paddingBottom:"8px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                  }}>
        <Stack  direction="column" 
                sx={{display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'}}
                      spacing={.25}>
          <Box sx={{ background: "lightblue", 
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
            }}>
                        <PaidIcon/>
                      </Box>
          <Typography variant='dashboard_card_heading'>{props.mainCategory.name}</Typography>
          <Typography variant='dashboard_card_heavy'>${summedEntries} /</Typography>
          <Typography variant='dashboard_card_light'>${summedBudget}</Typography>          
        </Stack>                            
      </Paper>      
    </React.Fragment>    
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardMainCategorySmallPanel