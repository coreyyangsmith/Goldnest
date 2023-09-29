//-------------------------------------------------------//
//  File Name: MainCateogryForm.jsx
//  Description: 
//
//  Requirements:
//      - None
//
//  Returns:
//      - Logs new Main Cateogry to DB and re-renders List
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Import
import TextField from '@mui/material/TextField'
import { Button, Stack } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// API Import
import { getRequest, postRequest } from '../../api/authenticated'

// Custom Hooks
import useToken from '../../hooks/useToken';


//  MAIN FUNCTION
//-------------------------------------------------------//

const MainCategoryForm = (props) => {

    // Custom Hooks
    const { token } = useToken();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    
    // Utility
    const onSubmit = async(FieldValues) => { // TODO if description is "" axios fails, to fix

        // Axios Post
        await postRequest("maincategories/", FieldValues, token);
        const newData = await getRequest("maincategories/", token);
        console.log(newData.data);
        props.setMainCategories(newData.data);        
        reset();
        await new Promise((resolve) => setTimeout(resolve, 250));    
    }

    return (
        <form onSubmit={handleSubmit((data) => {
            data.created_at = "";
            data.updated_at = "";
            onSubmit(data);
        })}>

            <Stack spacing={2} 
                    marginTop={2} 
                    fullwidth="true">
                <h3>Add Main Category</h3>

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

export default MainCategoryForm