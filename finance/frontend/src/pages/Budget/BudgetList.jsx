//-------------------------------------------------------//
//  File Name: BudgetList.jsx
//  Description: Given a selected sub category, returns a list of budget numbers.
//
//  Requirements:
//      - Budget Data for Selected Sub Category
//      - Prop: Selected Sub Category
//      - prop: Budget State
//
//  Renders:
//      - Sorted TextField inputs containing user set budget number.
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Imports
import { Box, TextField } from '@mui/material';

// My Imports
import { useBudget }  from '../../hooks/useBudget'
import SaveBudgetButton from './SaveBudgetButton';


//  MAIN FUNCTION
//-------------------------------------------------------//

const BudgetList = (props) => {

  // Hooks
  const {budgets, setBudgets} = useBudget(props.selectedSub);

  function updateValues(newVal, pk) {
      const arr = [...budgets];
      const index = arr.findIndex(p => p.pk === pk);
      arr[index].amount = parseInt(newVal);
      setBudgets(arr)
  }

  if (budgets.length > 0){
    const myBudgets = budgets.map(item => {
      function monthName(month) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];
    }

    return (
    <Box marginTop={2} 
          marginBottom={2}
          key={item.pk}>
        <TextField id="outlined-basic" 
                    variant="outlined"
                    value={isNaN(item.amount) ? '' : item.amount}
                    onChange={(e) => updateValues(e.target.value, item.pk)}
                    label={monthName(item.month)}
                    fullWidth/>
    </Box>  
    )})
    return (
      <>
          {myBudgets}
          <SaveBudgetButton budgets={budgets}/>
      </>

    )
  }
}


//  EXPORTS
//-------------------------------------------------------//

export default BudgetList