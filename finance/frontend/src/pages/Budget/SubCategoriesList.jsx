// React Imports
import React from 'react'

// MUI Imports
import { Stack, Button, Tooltip } from '@mui/material/';

// Axios import
import axios from 'axios';
const BUDGET_API = "http://127.0.0.1:8000/api/budgets/";

const SubCategoriesList = (props) => {
  let filteredSubCat = props.subCategory.filter((data) => data.main_category === props.selectedMain);


  const handleClick = async(subCat) => {
    props.setSelectedSub(subCat.pk);

    let budgetList = await axios.get(BUDGET_API);
    budgetList = budgetList.data
    let filteredBudgets = budgetList.filter((data) => data.sub_category.pk === subCat.pk);
    let sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
    
    props.setBudget(sortedBudgets)
  }

  const mySubCategories = filteredSubCat.map(subCat => {
    return <Tooltip title={subCat.description}
                    key={subCat.pk}>   
              <Button color="secondary"
                        key={subCat.pk}
                        variant="outlined" 
                        className={`Category-Button ${props.selectedSub === subCat.pk && "active"}`}                    
                        onClick={() => {handleClick(subCat)}}>
                {subCat.name}
              </Button>
            </Tooltip>            
  })

  return (
    <Stack spacing={2}>
        {mySubCategories}
    </Stack>
  )
}

export default SubCategoriesList