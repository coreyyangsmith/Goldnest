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
import { useState } from 'react'

// Component Imports
import DateComponent from '../../components/DateComponent.jsx'

// MUI Imports
import { Autocomplete } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

//Axios Import
import axios from "axios"
import useForm from '../../components/UseForm.jsx'


//  GLOBALS & INITIALIZATION
//-------------------------------------------------------//

const FORM_ENDPOINT = "http://127.0.0.1:8000/api/entrys/"
const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
const ROUTING_API = "http://127.0.0.1:8000/api/entitys/"

let mainCatData = await axios.get(MAIN_CATEGORY_API);
let subCatData = await axios.get(SUB_CATEGORY_API);
let routingData = await axios.get(ROUTING_API);

mainCatData = mainCatData.data
subCatData = subCatData.data
routingData = routingData.data

//  MAIN FUNCTION
//-------------------------------------------------------//

const AddNewForm = () => {
    // Use State to Manage variables for form submission
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [routing, setRouting] = useState("")
    const [mainCat, setMainCat] = useState("")
    const [subCat, setSubCat] = useState("")  
    const [income, setIncome] = useState("")
    const [expense, setExpense] = useState("")  

    const additionalData = {
        created_at: "2018-11-20T15:58:44.767594-06:00",
        updated_at: "2018-11-20T15:58:44.767594-06:00",
    }   

    const { handleSubmit } = useForm({additionalData});

  return (
    <>
    <form action={FORM_ENDPOINT}
                  onSubmit={handleSubmit}
                  method="POST"
                  autoComplete='on'>

      {/* Date */}
      <DateComponent value={date}
                      onChange={(e) => (e.target.value)}/>

      {/* Company (Router) */}
      <Autocomplete
              options={routingData} 
              value={routing}
              name="routing"
              getOptionLabel={(option) => option.name}
              onChange={(e) => setRouting(e.target.value.pk)}       
              renderInput={(params) => (
                  <TextField
                      {...params}
                      variant="standard"
                      label="Company"
                      placeholder=""
                  />)}
      />             

      {/* Name */}
      <TextField id="name-input" 
                  label="Item Name" 
                  variant="standard" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}/>

      {/* Notes (show on hover?) */}
      <TextField multiline 
                  id="notes-input" 
                  label="Notes" 
                  variant="standard"
                  maxRows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)} />    

      {/* Main Category */}
      <Autocomplete
                  options={mainCatData} 
                  value={mainCat}
                  name="main_category"
                  getOptionLabel={(option) => option.name}
                  onChange={(e) => setMainCat(e.target.value.pk)}       
                  renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="standard"
                          label="Main Category"
                          placeholder=""
                      />)}
      />      

      {/* Sub Category */}
      <Autocomplete
              options={subCatData} 
              value={subCat}
              name="subCat"
              getOptionLabel={(option) => option.name}
              onChange={(e) => setSubCat(e.target.value.pk)}       
              renderInput={(params) => (
                  <TextField
                      {...params}
                      variant="standard"
                      label="Sub Category"
                      placeholder=""
                  />)}
      /> 

      {/* Income */}
      <TextField id="income-input" 
                  label="Income" 
                  variant="standard"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)} />    

      {/* Expense */}
      <TextField id="expense-input" 
                  label="Expense" 
                  variant="standard"
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)} />        

      <Button type="submit">Submit</Button>
      </form>
    
    
    </>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default AddNewForm