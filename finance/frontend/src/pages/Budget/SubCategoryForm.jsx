//-------------------------------------------------------//
//  File Name: SubCategoryForm.jsx
//  Description: Form Submission for new Sub Cateogry, dependant on Selected Main
//
//  Requirements:
//      - /api/authenticated (axios)
//      - Selected Main Category
//
//  Submits:
//      - New Sub Category
//
// Created By: Corey Yang-Smith
// Date: September 28th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react'

// MUI Import
import TextField from '@mui/material/TextField'
import { Button, Stack, Input } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

//Axios Import
import { getRequest, postRequest } from '../../api/authenticated';

// Custom Hooks
import useToken from '../../hooks/useToken';


//  MAIN FUNCTION
//-------------------------------------------------------//

const SubCategoryForm = (props) => {

    // Custom Hooks
    const { token } = useToken();

    const [mainCatName, setMainCatName] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    //useEffect to get selected main_category (id), and find the corresponding name to update.
    useEffect(() => {
        if (props.selectedMain === undefined || props.selectedMain === "" || props.mainCategories === undefined || props.mainCategories === ""){
            console.log("No Main Category Selected - cannot populate Sub Categories");
            setMainCatName("");
        }
        else {
            var match = props.mainCategories.filter(obj => obj.id === props.selectedMain.id);
            setMainCatName(match[0].name);
        }
    }
    ,[props.selectedMain])

    const generateBudgetData = async(myNewCategory) => {
        console.log(myNewCategory);
        let budget_data = {amount: 0,
                            year: 2023, 
                            month: 0,
                            sub_category: myNewCategory,
                            created_at: "",
                            updated_at: ""}
 
        for (let i = 1; i <= 12; i++){
            budget_data.month = i;
            const response = await postRequest("budgets/", budget_data, token);
        }
    }

    const onSubmit = async(FieldValues) => {
        // Post to Server
        console.log("Submitting in SubCategoryForm");
        console.log(FieldValues);
        const response = await postRequest("subcategories/", FieldValues, token);
        const newData = await getRequest("subcategories/", token);
        const newDataFiltered = newData.data.filter((data) => data.main_category.id == props.selectedMain.id)
        props.setSubCategories(newDataFiltered);
        await new Promise((resolve) => setTimeout(resolve, 250));

        //Obtain reference to recent submission
        const myNewCat = newData.data[newData.data.length - 1];

        // Generate Budget Numbers
        generateBudgetData(myNewCat);

        // Obtain reference for budget generation
        const allBudgets = await getRequest("budgets/", token);
        const filteredBudgets = allBudgets.data.filter((data) => data.sub_category.pk === myNewCat.pk);
        const sortedBudgets = filteredBudgets.sort((a,b) => a.month - b.month);
        
        // Regen page for budget
        props.setSelectedSub(myNewCat);
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

                <Input 
                    readOnly
                    required
                    label="Main Category"
                    value={mainCatName}
                    placeholder='Selected Main Category'
                    variant="filled"
                    size='small'
                />              
              

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


//  EXPORTS
//-------------------------------------------------------//

export default SubCategoryForm