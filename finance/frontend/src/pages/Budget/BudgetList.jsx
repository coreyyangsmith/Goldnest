import React from 'react'

// MUI Imports
import { Box, TextField } from '@mui/material';

// Axios Import 
import axios from "axios"

const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"
let budgetList = await axios.get(BUDGET_API);
budgetList = budgetList.data


const BudgetList = (props) => {

  let filteredBudgets = budgetList.filter((data) => data.sub_category.pk === props.selectedSub);


  const myBudgets = filteredBudgets.map(budget => {

    function monthName(mon) {
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];
   }

    return (
    <Box margin={2}>
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