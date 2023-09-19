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
import SaveButton from '../../components/SaveButton';

// Axios Import
import { getRequest } from '../../api/posts'

const Budget = () => {
    const [mainCategory, setMainCategories] = useState([]) //used for live update
    const [subCategory, setSubCategories] = useState([])
    const [budget, setBudget] = useState([])

    const [selectedMain, setSelectedMain] = useState("") //used for button press and dynamic gen
    const [selectedSub, setSelectedSub] = useState("")      

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

        const fetchSubCategories = async() => {
            try {
                const response = await getRequest('subcategories/', "");
                setSubCategories(response.data);         
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
        fetchSubCategories();
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
                                            selectedMain={selectedMain}
                                            setMainCategories={setMainCategories}/>
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
                    <h2>Monthly Budget</h2>
                    <Box>
                        <BudgetList selectedSub={selectedSub}
                                    setBudget={setBudget}
                                    budget={budget}/>
                        <SaveButton itemToSave={budget}
                                    locationToSave={"budgets/"}/>
                    </Box>

                </Grid>              
            </Grid>
        </Stack>
    </>

)}

export default Budget;