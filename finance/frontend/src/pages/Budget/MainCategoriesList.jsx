//-------------------------------------------------------//
//  File Name: MainCategorisList.jsx
//  Description: TODO
//
//  Requirements:
//    - TODO
//
//  Returns:
//    - TODO
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
import { getRequest, deleteRequest } from '../../api/posts'

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';


//  UTILITY
//-------------------------------------------------------//


//  MAIN FUNCTION
//-------------------------------------------------------//

const MainCategoriesList = (props) => {

  //My Hooks
  const { mainCategory, setMainCategories } = useMainCategory();  

  // Handles Main Click - Sets Selected Main
  const handleClick = (mainCat) => {
    props.setSelectedMain(mainCat.pk)
  }

  // Handles Delete Button - Delete Selected Main Category (and Children)
  const handleDelete = (mainCat) => {
    console.log("Deleting: " + mainCat.name); 

    const deleteMainCategory = async(mainCat) => {
      try {
          const response = await deleteRequest('maincategories/' + mainCat.pk, "");
          console.log(response.data);      
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
    }

    const fetchMainCategories = async() => {
      try {
          const response = await getRequest('maincategories/', "");
          props.setMainCategories(response.data);         
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
  }
    deleteMainCategory(mainCat);
    fetchMainCategories();
  }

  

  console.log(mainCategory);

  if (mainCategory !== undefined){

    const myMainCategories = mainCategory.map(mainCat => {
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