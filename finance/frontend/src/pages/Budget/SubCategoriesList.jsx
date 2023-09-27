//-------------------------------------------------------//
//  File Name: SubCategoriesList.jsx
//  Description: Given selected main category, renders a list of subcateogry buttons
//
//  Requirements:
//      - Selected Sub Cateogry Data for Main Category
//      - Prop: Selected Main
//      - Prop: Sub Category
//      - Prop: Selected Sub State
//      - Prop: Budget State (TODO ?)
//
//  Renders:
//      - List of Sub Cateogry Buttons
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React, { useEffect } from 'react'

// MUI Imports
import { Stack, Button, Tooltip } from '@mui/material/';

// Axios import
import { getRequest } from '../../api/posts'

// My Imports
import { useSubCategory } from '../../hooks/useSubCategory'


//  MAIN FUNCTION
//-------------------------------------------------------//

const SubCategoriesList = (props) => {

  const subCategories = useSubCategory(props.selectedMain);

  
  const handleClick = async(subCat) => {
    // Regenerate SubCategories List
    props.setSelectedSub(subCat.pk);

    // // Regenerate Budget List
    // const response = await getRequest('budgets/', "");
    // let filteredBudgets = response.data.filter((data) => data.sub_category.pk === subCat.pk);
    // let sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
    // props.setBudget(sortedBudgets)
  }

  const handleDelete = async(subCat) => {
    console.log("Deleting: " + subCat.name);
    //TODO
  }

  if (subCategories.length > 0)
  {
    const mySubCategories = subCategories.map(subCat => {
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
}


//  EXPORTS
//-------------------------------------------------------//

export default SubCategoriesList