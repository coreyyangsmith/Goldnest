// React Imports
import React from 'react'

// MUI Imports
import { Stack, Button, Paper } from '@mui/material/';

// Axios Import
import axios from "axios"


const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"



const SubCategoriesList = (props) => {
  let filteredSubCat = props.subCategory.filter((data) => data.main_category === props.selectedMain);


  const handleClick = async(subCat) => {
    props.setSelectedSub(subCat.pk);

    let budgetList = await axios.get(BUDGET_API);
    budgetList = budgetList.data

    let filteredBudgets = budgetList.filter((data) => data.sub_category.pk === subCat.pk);
    let sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
        
    props.setBudget(sortedBudgets);
  }

  const mySubCategories = filteredSubCat.map(subCat => {
    return <Button color="secondary"
                    variant="outlined" 
                    className={`Category-Button ${props.selectedSub === subCat.pk && "active"}`}                    
                    onClick={() => {handleClick(subCat)}}>
            {subCat.name}
          </Button>
  })

  return (
    <Stack spacing={2}>
        {mySubCategories}
    </Stack>
  )
}

export default SubCategoriesList