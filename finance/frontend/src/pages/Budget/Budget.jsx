// React Imports
import React, { useEffect, useState } from 'react'

// MUI Imports
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

// My Components Import
import MainCategoriesList from "./MainCategoriesList";
import MainCategoryForm from "./MainCategoryForm";
import SubCategoriesList from "./SubCategoriesList";
import SubCategoryForm from "./SubCategoryForm";
import BudgetList from './BudgetList';
import YearSelection from './YearSelection';
import SaveButton from '../../components/SaveButton';

// Axios Import
import axios from 'axios'
import { getRequest } from '../../api/posts'

const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
let mainCatList = await axios.get(MAIN_CATEGORY_API);
mainCatList = mainCatList.data

const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
let subCatList = await axios.get(SUB_CATEGORY_API);
subCatList = subCatList.data

const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"

const Budget = () => {
    const [mainCategory, setMainCategories] = useState([]) //used for live update
    const [subCategory, setSubCategories] = useState(subCatList)
    const [budget, setBudget] = useState([])

    const [selectedMain, setSelectedMain] = useState("") //used for button press and dynamic gen
    const [selectedSub, setSelectedSub] = useState("")      
    const [selectedYear, setSelectedYear] = useState("")  


    useEffect(() => {
        const fetchMainCategories = async() => {
            try {
                const response = await getRequest('maincategories/', "");
                setMainCategories(response.data);         
            } catch (err) {
                if (err.response) {
                    // Not in 200 response range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);   
                }
                else {
                    console.log(`Error: ${err.message}`);
                }                             
            }
        }
        fetchMainCategories();
    }
    ,[])

    return (
    <>
        <h1>Welcome to My Budget</h1>
        <Stack>
            {/* 
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <YearSelection selectedYear={selectedYear}
                                    setSelectedYear={setSelectedYear}/>
                </Grid>
                <Grid item xs={4}>
                    <p>current empty space!</p>
                </Grid>
            </Grid>
    */}


            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h2>Main Categories</h2>
                    <Box sx={{
                    }}>
                        <MainCategoriesList mainCategory={mainCategory} 
                                            setSelectedMain={setSelectedMain}
                                            selectedMain={selectedMain}/>
                        <MainCategoryForm setMainCategories={setMainCategories}/>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <h2>Sub Categories</h2>
                    <Box sx={{
                    }}>
                        <SubCategoriesList subCategory={subCategory} 
                                            selectedMain={selectedMain}
                                            selectedSub={selectedSub} 
                                            setSelectedSub={setSelectedSub}
                                            setBudget={setBudget}
                                            budget={budget}/>
                        <SubCategoryForm setSubCategories={setSubCategories}
                                            selectedMain={selectedMain}
                                            setSelectedSub={setSelectedSub}
                                            setBudget={setBudget}
                                            budget={budget}/>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <h2>Month Selection</h2>
                    <Box>
                        <BudgetList selectedSub={selectedSub}
                                    setBudget={setBudget}
                                    budget={budget}/>
                        <SaveButton itemToSave={budget}
                                    locationToSave={BUDGET_API}/>
                    </Box>

                </Grid>              
            </Grid>
        </Stack>
    </>

)}

export default Budget;