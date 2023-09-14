// React Imports
import React from 'react'
import { useState } from 'react';


// MUI Imports
import { Stack, Button, Paper } from '@mui/material/';

// Axios Import
import axios from "axios"

const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
let subCatList = await axios.get(SUB_CATEGORY_API);
subCatList = subCatList.data


const SubCategoriesList = (props) => {
  let filteredSubCat = subCatList.filter((data) => data.main_category === props.selectedMain);

  const handleClick = (subCat) => {
    props.setSelectedSub(subCat.pk)
  }

  const mySubCategories = filteredSubCat.map(subCat => {
    return <Button color="secondary" 
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