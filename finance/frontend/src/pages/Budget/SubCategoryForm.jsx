// React Import
import React, { useState } from 'react'

// MUI Import
import TextField from '@mui/material/TextField'
import { Button, Stack, FormLabel, Autocomplete } from "@mui/material";

// React Hook Form
import { useForm, control, Controller } from "react-hook-form";

//Axios Import
import axios from "axios"
const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
const FORM_ENDPOINT = "http://127.0.0.1:8000/api/maincategories/"

let mainCatList = await axios.get(MAIN_CATEGORY_API);
const options = mainCatList.data

const SubCategoryForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm();

    const getOpObj = option => {
        if (!option._id) option = options.find(op => op._id === option);
        return option;
      };
    
    const onSubmit = async(FieldValues) => {
        axios.post(FORM_ENDPOINT, FieldValues);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log(FieldValues);

        reset();
    }

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log("handling submission");
            data.created_at = "";
            data.updated_at = "";
            onSubmit(data);
        })}>

            <Stack spacing={2} width={450}>
                <FormLabel>Sub Category</FormLabel>


                
                <Controller
                name="Main Category"
                control={control}
                rules={{
                    required: "this field is requried"
                }}
                render={({ field, fieldState: { error } }) => {
                    const { onChange, value, ref } = field;
                    return (
                    <>
                        <Autocomplete
                        value={
                            value ? options.find((option) => {
                                return value === option.id;
                                }) ?? null : null
                        }
                        getOptionLabel={(option) => {
                            return option.name;
                        }}
                        onChange={(event, newValue) => {
                            onChange(newValue ? newValue.id : null);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Main Category"
                            inputRef={ref}
                            />
                        )}
                        />
                        {error ? (
                        <span style={{ color: "red" }}>{error.message}</span>
                        ) : null}
                    </>
                    );
                    }}
                />


                <TextField {...register("name", {
                    required: "Category name is required"
                })} 
                    placeholder='Enter Category Name'
                />
                {errors.name && (
                    <p>{`${errors.name.message}`}</p>
                )}      

                <TextField {...register("description")} 
                            placeholder='Enter Category Description'
                            multiline
                            minRows={4}/>

                                  

                <Button type="submit"
                        disabled={isSubmitting}>
                            Submit
                </Button>    

            </Stack>            
        </form>
  )
}

export default SubCategoryForm