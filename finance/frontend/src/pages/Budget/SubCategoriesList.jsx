//-------------------------------------------------------//
//  File Name: SubCategoriesList.jsx
//  Description: Given selected main category, renders a list of subcateogry buttons
//
//  Requirements:
//      - Selected Sub Cateogry Data for Main Category
//      - Prop: Selected Main
//      - Prop: Sub Category
//      - Prop: Selected Sub State
//      - Prop: Budget State (TODO ?)
//
//  Renders:
//      - List of Sub Cateogry Buttons
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react'
import { useState } from 'react';

// MUI Imports
import { Stack, Button, Tooltip } from '@mui/material/';

// API Import
import { deleteRequest } from '../../api/authenticated';

// My Imports
import ConfirmationDialog from '../../components/ConfirmationDialog';

// Custon Hook
import useToken from '../../hooks/useToken';

//  MAIN FUNCTION
//-------------------------------------------------------//

const SubCategoriesList = (props) => {

  // My Hooks
  const { token } = useToken();  
  const [open, setOpen] = useState(false);  
  const [selectedToDelete, setSelectedToDelete] = useState("");

  // Utility Functions
  const handleClickOpen = (category) => {
    setSelectedToDelete(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  const handleConfirmation = (category, open) => {
    if (open){
      handleDelete(category);
      setOpen(false);
    }
  }  
  
  // Handles SubCat Click - Sets Selected Sub
  const handleClick = async(subCat) => {
    props.setSelectedSub(subCat);
  }

  // Handles Delete Button - Delete Selected Sub Category (and Regen List)
  const handleDelete = (subCat) => {
    
    // Handle Delete
    const deleteSubCategory = async(subCat) => {
      // Deletes Sub Category (associated Budgets get deleted through CASCADE)
      try {
        await deleteRequest('subcategories/' + subCat.pk, token);
      } catch (err) {
        if (err.response) {
          // Not in 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);   
        }
        else {
            console.log(`Error: ${err.message}`);
        }            
      }

      // Need to reset selected sub category
      if (subCat.pk == props.selectedSub)
        props.setSelectedSub("")
      
    }
    deleteSubCategory(subCat);

    // Handle Live Update
    const myNewSubCategories = props.subCategories.filter((myItems) => {
      return myItems != subCat
    })
    props.setSubCategories(myNewSubCategories);
  }

  if (props.subCategories.length > 0)
  {
    const mySubCategories = props.subCategories.map(subCat => {
      return <React.Fragment key={subCat.pk}>
      <Stack direction="row" spacing={0.5}>
        <Tooltip title={subCat.description}>   
                <Button color="secondary"
                          fullWidth={true}
                          variant="outlined" 
                          className={`Category-Button ${props.selectedSub.pk === subCat.pk && "active"}`}                    
                          onClick={() => {handleClick(subCat)}}>
                  {subCat.name}
                </Button>
              </Tooltip>   
              <Button color="error"
                variant='outlined'
                onClick={() => handleClickOpen(subCat)}>X</Button>
      </Stack>         
      <ConfirmationDialog open={open}
                          setOpen={setOpen}
                          handleClose={handleClose}
                          handleConfirmation={handleConfirmation}
                          category={selectedToDelete}/>      
      </React.Fragment>                    
    })
  
    return (
      <Stack spacing={2}>
          {mySubCategories}
      </Stack>
    )
  }
}


//  EXPORTS
//-------------------------------------------------------//

export default SubCategoriesList