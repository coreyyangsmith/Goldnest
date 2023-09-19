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

  const handleDelete = async(subCat) => {
    console.log("Deleting: " + subCat.name);
  }

  const mySubCategories = filteredSubCat.map(subCat => {
    return <React.Fragment key={subCat.pk}>
    <Stack direction="row" spacing={0.5}>
      <Tooltip title={subCat.description}>   
              <Button color="secondary"
                        fullWidth={true}
                        variant="outlined" 
                        className={`Category-Button ${props.selectedSub === subCat.pk && "active"}`}                    
                        onClick={() => {handleClick(subCat)}}>
                {subCat.name}
              </Button>
            </Tooltip>   
            <Button color="error"
              variant='outlined'
              onClick={() => handleDelete(subCat)}>X</Button>
    </Stack>         
            </React.Fragment>                    
  })

  return (
    <Stack spacing={2}>
        {mySubCategories}
    </Stack>
  )
}

export default SubCategoriesList