// React Import
import React, { useState } from 'react'

// MUI Import
import TextField from '@mui/material/TextField'
import { Button, Stack, FormLabel } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

//Axios Import
import axios from "axios"
const BUDGET_ENDPOINT = "http://127.0.0.1:8000/api/budgets/"
const FORM_ENDPOINT = "http://127.0.0.1:8000/api/subcategories/"

const BUDGET_API = "http://127.0.0.1:8000/api/budgets/"
const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"

let mainCatList = await axios.get(MAIN_CATEGORY_API);
mainCatList = mainCatList.data;

const SubCategoryForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const generateBudgetData = (myNewCategory) => {
        let budget_data = {amount: 0,
                            year: 2023, 
                            month: 0,
                            sub_category: myNewCategory,
                            created_at: "",
                            updated_at: ""}
 
        for (let i = 1; i <= 12; i++){
            budget_data.month = i;
            axios.post(BUDGET_ENDPOINT, budget_data);
        }
    }

    const onSubmit = async(FieldValues) => {
        // Post to Server
        axios.post(FORM_ENDPOINT, FieldValues);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        //Obtain reference to recent submission
        let subCatList = await axios.get(SUB_CATEGORY_API);
        subCatList = subCatList.data;
        let myNewCat = subCatList[subCatList.length - 1];

        // Regen Page for SubCategory Update
        props.setSubCategories(subCatList);

        // Generate Budget Numbers
        generateBudgetData(myNewCat);

        // Obtain reference for budget generation
        let budgetList = await axios.get(BUDGET_API);
        budgetList = budgetList.data
        let filteredBudgets = budgetList.filter((data) => data.sub_category.pk === myNewCat.pk);
        let sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
        
        // Regen page for budget
        props.setSelectedSub(myNewCat.pk);
        props.setBudget(sortedBudgets);
     
        reset();
    }

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log("handling submission");
            data.main_category = props.selectedMain;
            data.created_at = "";
            data.updated_at = "";
            onSubmit(data);
        })}>

            <Stack marginTop={2}
                    spacing={2} 
                    fullwidth="true">
                <h3>Add Sub Category</h3>

                <FormLabel>Selected Main Category: {props.selectedMain}</FormLabel>

                <TextField {...register("name", {
                    required: "Name is required"
                })} 
                    placeholder='Enter Category Name'
                />
                {errors.name && (
                    <p>{`${errors.name.message}`}</p>
                )}      

                <TextField {...register("description", {
                    required: "Description is required"
                })}  
                            placeholder='Enter Category Description'
                            multiline
                            minRows={4}/>
                {errors.description && (
                    <p>{`${errors.description.message}`}</p>
                )}                                       

                <Button type="submit"
                        disabled={isSubmitting}>
                            Submit
                </Button>    

            </Stack>            
        </form>
  )
}

export default SubCategoryForm