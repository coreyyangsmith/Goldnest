import React from 'react'

// MUI Imports
import { Box, TextField } from '@mui/material';

const BudgetList = (props) => {


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