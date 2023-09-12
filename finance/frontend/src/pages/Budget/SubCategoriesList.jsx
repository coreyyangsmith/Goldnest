// React Imports
import React from 'react'
import { useState } from 'react';


// Axios Import
import axios from "axios"

const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
let subCatList = await axios.get(SUB_CATEGORY_API);
subCatList = subCatList.data

const mySubCategories = subCatList.map(subCat => {
    return <li>{subCat.name}</li>
})

const SubCategoriesList = () => {
    const [subCat, setSubCat] = useState([])

  return (
    <ul>
        {mySubCategories}
    </ul> 
  )
}

export default SubCategoriesList