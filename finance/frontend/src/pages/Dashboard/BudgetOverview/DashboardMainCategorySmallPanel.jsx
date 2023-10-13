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
import { Box, Card, CardActionArea, CardContent, Paper, Stack, Typography } from '@mui/material';

// MUI Icon Import
import PaidIcon from '@mui/icons-material/Paid'; //TEMPORARY


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardMainCategorySmallPanel = (props) => {

  // My Hooks 
  const [summedEntries, setSummedEntries] = useState(0)
  const [summedBudget, setSummedBudget] = useState(0)

  const handleClick = (mainCategory) => {
    props.setSelectedMain(mainCategory);
  }

  // Load Budget & Entry Data, and Sum based on selected year/month
  useEffect(() => {

    // Entries
    // Set summedEntries for Selected Year/Month
    const entriesForYear = props.entries.filter(function(row) {
      return row.year == props.selectedYear;
    })

    const entiresByMonth = entriesForYear.filter(function(row) {
      return row.month == props.selectedMonth;
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
      return row.year == props.selectedYear;
    })

    const budgetByMonth = budgetForYear.filter(function(row) {
      return row.month == props.selectedMonth;
    })

    const filteredBudgets = budgetByMonth.filter((entry) => {
      return entry.sub_category.main_category.name === props.mainCategory.name;
    });

    const mySummedBudget = filteredBudgets.reduce((total, entry) => total + entry.amount, 0);

    const myRoundedBudget = Math.round(mySummedBudget);
    
    setSummedBudget(myRoundedBudget)

  }, [props])

  function obtainCircleColor(entry, budget) {
    const percentage = entry/budget;

    if ((percentage < 0.2) | (percentage == NaN)) //purple
      return "#dacbe6";
    else if (percentage < 0.4) //blue
      return "#b3e6b8";
    else if (percentage < 0.6) // green
      return "#b3e6be";
    else if (percentage < 0.8) // yellow
      return "#e6e5b3";
    else if (percentage <= 1) // orange
      return "#e6d0b3";      
    else if (percentage > 1) // red
      return "#e6b3b3";
  }

  return (
    <React.Fragment key={props.mainCategory.id}>
      <Card className={`Dashboard-Category ${props.selectedMain.id === props.mainCategory.id && "active"}`}
            sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: "100%",
                  boxShadow: 1,
                  "&:hover": {
                    boxShadow: 4,
                  },
                  }}>
          <CardActionArea onClick={() => handleClick(props.mainCategory)}>
            <CardContent sx={{paddingLeft:"16px", 
                              paddingRight:"16px", 
                              paddingTop:"16px", 
                              paddingBottom:"8px"}}>
              <Stack  direction="column" 
                      sx={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            spacing={.25}>
                <Box sx={{ background: obtainCircleColor(summedEntries, summedBudget), 
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                  }}>
                              <PaidIcon/>
                            </Box>
                <Typography variant='dashboard_card_heading' style={{flexWrap: "wrap", height: "auto", width: "maxContent"}}>{props.mainCategory.name}</Typography>
                <Typography variant='dashboard_card_heavy'>${summedEntries} /</Typography>
                <Typography variant='dashboard_card_light'>${summedBudget}</Typography>          
              </Stack>     
            </CardContent> 
          </CardActionArea>                                                      
      </Card>      
    </React.Fragment>    
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardMainCategorySmallPanel