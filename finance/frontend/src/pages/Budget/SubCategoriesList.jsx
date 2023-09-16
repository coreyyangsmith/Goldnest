// React Imports
import React from 'react'

// MUI Imports
import { Stack, Button, Tooltip } from '@mui/material/';

// Axios import
import { getRequest } from '../../api/posts'

const SubCategoriesList = (props) => {
  let filteredSubCat = props.subCategory.filter((data) => data.main_category === props.selectedMain);


  const handleClick = async(subCat) => {
    // Regenerate SubCategories List
    props.setSelectedSub(subCat.pk);

    // Regenerate Budget List
    const response = await getRequest('budgets/', "");
    let filteredBudgets = response.data.filter((data) => data.sub_category.pk === subCat.pk);
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