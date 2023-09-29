//-------------------------------------------------------//
//  File Name: MainCategorisList.jsx
//  Description: Generates Clickable Buttons from Main Category Data
//
//  Requirements:
//    - User Data (Main Categories)
//    - setSelected Main (prop) for use in parent state
//    - selectedMain (prop) for activating selected button
//
//  Returns:
//    - Selects Main Category (updates state)
//
// Created By: Corey Yang-Smith
// Date: September 23rd, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react'

// CSS Import
import "../../components/css/UIStyles.css";

// MUI Imports
import { Button, Stack, Tooltip } from '@mui/material/'

// API Imports
import { deleteRequest } from '../../api/authenticated'

// My Hooks
import useToken from '../../hooks/useToken';


//  UTILITY
//-------------------------------------------------------//


//  MAIN FUNCTION
//-------------------------------------------------------//

const MainCategoriesList = (props) => {

  //My Hooks
  const { token } = useToken();

  // Handles Main Click - Sets Selected Main
  const handleClick = (mainCat) => {
    props.setSelectedMain(mainCat.pk)
  }

  // Handles Delete Button - Delete Selected Main Category (and Children)
  const handleDelete = (mainCat) => {

    // Handle Delete
    const deleteMainCategory = async(mainCat) => {
      // Deletes Main Category (associated SubCat & Budgets get deleted by CASCADE)
      try {
        await deleteRequest('maincategories/' + mainCat.pk, token); 
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

      // Need to reset selected main category
      props.setSelectedMain("")
      props.setSelectedSub("")
    }

    deleteMainCategory(mainCat);

    // Handle Live Update
    const myNewMainCategories = props.mainCategories.filter((myItems) => {
      return myItems != mainCat
    })
    props.setMainCategories(myNewMainCategories);
  }

  if (props.mainCategories !== undefined && props.mainCategories.length > 0){
    const myMainCategories = props.mainCategories.map(mainCat => {
      return  <React.Fragment key={mainCat.pk}>
      <Stack direction="row" spacing={0.5}>
      <Tooltip title={mainCat.description}>
        <Button color="secondary"
                        variant="outlined" 
                        fullWidth={true}
                        className={`Category-Button ${props.selectedMain === mainCat.pk && "active"}`} 
                        onClick={() => {handleClick(mainCat)}}>
          {mainCat.name}
        </Button>
      </Tooltip>
      <Button color="error"
            variant='outlined'
            onClick={() => handleDelete(mainCat)}>X</Button>
      </Stack>
      </React.Fragment>
    })
  
    return (
      <Stack spacing={2}>
          {myMainCategories}
      </Stack> 
    )
  }    
}

export default MainCategoriesList