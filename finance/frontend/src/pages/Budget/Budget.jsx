//-------------------------------------------------------//
//  File Name: Budget.jsx
//  Description: TODO
//
//  Requirements:
//      - TODO
//
//  Returns:
//      - TODO
//
// Created By: Corey Yang-Smith
// Date: September 23rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React, { useState } from 'react'

// MUI Imports
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

// My Components Import
import MainCategoriesList from "./MainCategoriesList";
import MainCategoryForm from "./MainCategoryForm";
import SubCategoriesList from "./SubCategoriesList";
import SubCategoryForm from "./SubCategoryForm";
import BudgetList from './BudgetList';
import SaveBudgetButton from './SaveBudgetButton';

// Custom Hooks 
import { useMainCategory } from '../../hooks/useMainCategory';
import { useSubCategory } from '../../hooks/useSubCategory';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Budget = () => {
    const [budget, setBudget] = useState([])
    const [selectedMain, setSelectedMain] = useState("") //used for button press and dynamic gen
    
    const [formSubmitted, setFormSubmitted] = useState(1);
    const [selectedSub, setSelectedSub] = useState("")      

    const { mainCategories, setMainCategories } = useMainCategory();
    const { subCategories, setSubCategories } = useSubCategory(selectedMain);

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
                        <MainCategoriesList setSelectedMain={setSelectedMain}
                                            selectedMain={selectedMain}
                                            formSubmitted={formSubmitted}
                                            mainCategories={mainCategories}
                                            setMainCategories={setMainCategories}/>

                        <MainCategoryForm   formSubmitted={formSubmitted}
                                            setFormSubmitted={setFormSubmitted}
                                            setMainCategories={setMainCategories}/>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <h2>Sub Categories</h2>
                    <Box sx={{
                    }}>
                        <SubCategoriesList  selectedMain={selectedMain}
                                            selectedSub={selectedSub} 
                                            setSelectedSub={setSelectedSub}
                                            subCategories={subCategories}/>

                        <SubCategoryForm    setSubCategories={setSubCategories}
                                            selectedMain={selectedMain} //used
                                            setSelectedSub={setSelectedSub}
                                            setBudget={setBudget}
                                            mainCategories={mainCategories}/>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <h2>Monthly Budget</h2>
                    <Box>
                        <BudgetList selectedSub={selectedSub}/>
                    </Box>

                </Grid>              
            </Grid>
        </Stack>
    </>

)}


//  EXPORTS
//-------------------------------------------------------//

export default Budget;