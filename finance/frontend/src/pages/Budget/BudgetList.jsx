import React, { useEffect, useState } from 'react'

// MUI Imports
import { Box, TextField } from '@mui/material';

// Axios Import
import axios from "axios"
const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"

const BudgetList = (props) => {

  {/* Upon sub_category selection, retrives relevant budget data and forces budgetList re-render */}
  useEffect(
    () => {
      const myFunc = async() => {
        let budgetList = await axios.get(BUDGET_API);
        budgetList = budgetList.data
    
        let filteredBudgets = budgetList.filter((data) => data.sub_category.pk === props.selectedSub);
        let sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
        props.setBudget(sortedBudgets);
      }
      myFunc();
    },
    [props.selectedSub])

  const myBudgets = props.budget.map(budget => {
    function monthName(month) {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
   }

    return (
    <Box margin={2}
          key={budget.pk}>
        <TextField id="outlined-basic" 
                    variant="outlined"
                    value={budget.amount}
                    label={monthName(budget.month)}/>
    </Box>  
  )})

  return (
    <>
        {myBudgets}
    </>

  )
}

export default BudgetList