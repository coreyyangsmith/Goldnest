// React Imports
import React from 'react'

// MUI Imports
import { Stack, Button, Paper } from '@mui/material/';



const SubCategoriesList = (props) => {
  let filteredSubCat = props.subCategory.filter((data) => data.main_category === props.selectedMain);


  const handleClick = async(subCat) => {
    props.setSelectedSub(subCat.pk);


  }

  const mySubCategories = filteredSubCat.map(subCat => {
    return <Button color="secondary"
                    key={subCat.pk}
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