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

// Toast Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        try {
            // Axios Post
            console.log(FieldValues);        
            await postRequest("maincategories/", FieldValues, token);
            const newData = await getRequest("maincategories/", token);
            props.setMainCategories(newData.data);    

            toast.success(FieldValues.name + ' main category saved successfully!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });  
        } catch (err) {
            if (err.response) {            
              // Not in 200 response range
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);               
            } else {
                console.log(`Error: ${err.message}`);
        }      
        toast.error('Unknown error occured.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });  
        }         
        
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
            <ToastContainer/>         
        </form>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default MainCategoryForm