// React Imports
import React from 'react'

// CSS Import
import "../../components/css/UIStyles.css";

// MUI Imports
import { Button, Stack } from '@mui/material/'

const MainCategoriesList = (props) => {

  const handleClick = (mainCat) => {
    props.setSelectedMain(mainCat.pk)
  }

  const myMainCategories = props.mainCategory.map(mainCat => {
    return  <Button color="secondary"
                    variant="outlined" 
                    className={`Category-Button ${props.selectedMain === mainCat.pk && "active"}`} 
                    onClick={() => {handleClick(mainCat)}}>
              {mainCat.name}
            </Button>
  })

  return (
    <Stack spacing={2}>
        {myMainCategories}
    </Stack> 
  )
}

export default MainCategoriesList