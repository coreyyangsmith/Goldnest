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
import SaveBudgetButton from './SaveBudgetButton';


//  MAIN FUNCTION
//-------------------------------------------------------//

const Budget = () => {
    const [subCategory, setSubCategories] = useState([])
    const [budget, setBudget] = useState([])
    const [selectedMain, setSelectedMain] = useState("") //used for button press and dynamic gen
    
    const [selectedSub, setSelectedSub] = useState("")      


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
                                            selectedMain={selectedMain}/>
                        <MainCategoryForm/>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <h2>Sub Categories</h2>
                    <Box sx={{
                    }}>
                        <SubCategoriesList  selectedMain={selectedMain}
                                            selectedSub={selectedSub} 
                                            setSelectedSub={setSelectedSub}/>
                        <SubCategoryForm    setSubCategories={setSubCategories}
                                            selectedMain={selectedMain}
                                            setSelectedSub={setSelectedSub}
                                            setBudget={setBudget}
                                            budget={budget}/>
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