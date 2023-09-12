// React Imports
import React from 'react'


// MUI Imports
import { Paper, Stack } from '@mui/material/'

const MainCategoriesList = (props) => {

  const paperSX = {
    boxShadow: 3,
    "&:hover": {
      boxShadow: 12
    },
  };

  const myMainCategories = props.mainCategory.map(mainCat => {
    return  <Paper sx={paperSX}>
              {mainCat.name}
        </Paper>
  })

  return (
    <Stack spacing={2}>
        {myMainCategories}
    </Stack> 
  )
}

export default MainCategoriesList