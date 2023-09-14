// React Import
import React, { useState } from 'react'

// MUI Import
import TextField from '@mui/material/TextField'
import { Button, Stack, FormLabel, Autocomplete } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

//Axios Import
import axios from "axios"
const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
const FORM_ENDPOINT = "http://127.0.0.1:8000/api/maincategories/"

const MainCategoryForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    
    const onSubmit = async(FieldValues) => { // TODO if description is "" axios fails, to fix
        axios.post(FORM_ENDPOINT, FieldValues);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(FieldValues);

        // Regen Page
        let mainCatList = await axios.get(MAIN_CATEGORY_API);
        mainCatList = mainCatList.data
        props.setMainCategories(mainCatList);
        
        reset();
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
                <FormLabel>Add Main Category</FormLabel>

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

export default MainCategoryForm