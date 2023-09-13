// React Imports
import React from 'react'


// MUI Imports
import { Button, Stack } from '@mui/material/'

const MainCategoriesList = (props) => {

  const paperSX = {
    boxShadow: 3,
    "&:hover": {
      boxShadow: 12
    },
  };

  const handleClick = (mainCat) => {
    props.setSelectedMain(mainCat.name)
    console.log(mainCat)
  }

  const myMainCategories = props.mainCategory.map(mainCat => {
    return  <Button color="secondary" 
                    sx={paperSX}
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