//-------------------------------------------------------//
//  File Name: AddNewForm.jsx
//  Description: Form to Add New Database Item
//
//  Parents:
//      - Database.jsx
//
//  Returns:
//      - Add New Item Form
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Imports
import { Autocomplete, Select } from '@mui/material/'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// API Import
import { getRequest, postRequest } from '../../api/authenticated'

// Custom Hooks
import useToken from '../../hooks/useToken.js'

// Day JS/Date Picker
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//  GLOBALS & INITIALIZATION
//-------------------------------------------------------//

const options = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" }
  ];

//  MAIN FUNCTION
//-------------------------------------------------------//

const AddNewForm = (props) => {

    // Custom Hooks
    const { token } = useToken();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control,
    } = useForm();    

    const additionalData = {
        created_at: "2018-11-20T15:58:44.767594-06:00",
        updated_at: "2018-11-20T15:58:44.767594-06:00",
    }   

    // Utility
    const onSubmit = async(FieldValues) => {
        // Axios Post
        console.log(FieldValues);
        await postRequest("entrys/", FieldValues, token);
        const newData = await getRequest("entrys/", token);
        console.log(newData.data);
        props.setEntrys(newData.data);
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
            <h3>Add New Entry</h3>

            {/* Date */}
            <Controller
              control={control}
              name='date'
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      placeholderText='Select date'
                      onChange={(date) => field.onChange(dayjs(date.$d).format('YYYY-MM-DD'))}
                      selected={field.value}
                    />
                </LocalizationProvider>
             )}
            />

            {/* Company (Router) */}
            <TextField {...register("routing", {
                    required: "Company is required"
                })} 
                    placeholder='Enter Company/Entity Name'
            />
            {errors.routing && (
                <p>{`${errors.routing.message}`}</p>
            )}        

            <Stack  direction="row" 
                    spacing={2}>
                {/* Name */}
                <TextField {...register("name", {
                    required: "Name is required"
                })} 
                    placeholder='Enter Entity Name'
                />
                {errors.name && (
                    <p>{`${errors.name.message}`}</p>
                )}  

                {/* Notes (show on hover?) */}
                <TextField {...register("notes", {
                    required: "Notes is required"
                })} 
                    placeholder='Enter Note'
                    fullWidth
                />
                {errors.notes && (
                    <p>{`${errors.notes.message}`}</p>
                )}                      
            </Stack> 

            {/* Main Category */}       
            <Controller
              control={control}
              name='main_category'
              render={({ field: {onChange, value} }) => (
                <Autocomplete
                onChange={(event, item) => {
                  onChange(item);
                }}
                value={value}
                options={options}
                getOptionLabel={(item) => (item.name ? item.name : "")}
                getOptionSelected={(option, value) =>
                  value === undefined || value === "" || option.id === value.id
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="items"
                    margin="normal"
                    variant="outlined"
                    error={!!errors.item}
                    helperText={errors.item && "item required"}
                    required
                  />
                )}
              />
             )}
            />

            {/* Sub Category */}
            <TextField {...register("sub_category", {
                    required: "Sub Category is required"
                })} 
                    placeholder='Enter Sub Category'
                    fullWidth
            />
            {errors.sub_cateogry && (
                <p>{`${errors.sub_cateogry.message}`}</p>
            )}  

            {/* Income */}
            <TextField {...register("income", {
                    required: "Income is required"
                })} 
                    placeholder='Enter Income'
                    fullWidth
            />
            {errors.income && (
                <p>{`${errors.income.message}`}</p>
            )} 

            {/* Expense */}
            <TextField {...register("expense", {
                    required: "Expense is required"
                })} 
                    placeholder='Enter Expense'
                    fullWidth
            />
            {errors.sub_cateogry && (
                <p>{`${errors.sub_cateogry.message}`}</p>
            )}                                    
        </Stack>
      <Button type="submit">Submit</Button>
      </form>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default AddNewForm