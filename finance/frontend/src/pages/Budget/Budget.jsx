// React Imports
import React, { useState } from 'react'

// MUI Imports
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";

// My Components Import
import MainCategoriesList from "./MainCategoriesList";
import MainCategoryForm from "./MainCategoryForm";
import SubCategoriesList from "./SubCategoriesList";
import SubCategoryForm from "./SubCategoryForm";

// Axios Import
import axios from 'axios'

const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
let mainCatList = await axios.get(MAIN_CATEGORY_API);
mainCatList = mainCatList.data

const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
let subCatList = await axios.get(SUB_CATEGORY_API);
subCatList = subCatList.data

const Budget = () => {
    const [mainCategory, setMainCategories] = useState(mainCatList) //used for live update
    const [subCategory, setSubCategories] = useState(subCatList)

    const [selectedMain, setSelectedMain] = useState("") //used for button press and dynamic gen
    const [selectedSub, setSelectedSub] = useState([])        

    return (
    <>
        <h1>Welcome to My Budget</h1>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h2>Main Categories</h2>
                <Box sx={{
                }}>
                    <MainCategoriesList mainCategory={mainCategory} setSelectedMain={setSelectedMain}/>
                    <MainCategoryForm setMainCategories={setMainCategories}/>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <h2>Sub Categories</h2>
                <Box sx={{
                }}>
                    <SubCategoriesList subCategory={subCategory} selectedMain={selectedMain}/>
                    <SubCategoryForm setSubCategories={setSubCategories}/>
                </Box>
            </Grid>

            <Grid item xs={4}>
            <h2>Month Selection</h2>

            </Grid>              

          


        </Grid>
    </>

)}

export default Budget;