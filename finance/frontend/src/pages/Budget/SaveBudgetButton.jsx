//-------------------------------------------------------//
//  File Name: SaveBudgetButton.jsx
//  Description: Save Button for Budget Updates
//
//  Parent:
//      - BudgetList.jsx
//
//  Function:
//      - Sends PUT Req for each Budget to API
//
// Created By: Corey Yang-Smith
// Date: September 27th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// MUI Import
import { Button } from '@mui/material'

// Axios Import
import { putRequest } from '../../api/authenticated'

// Toast Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Hooks
import useToken from "../../hooks/useToken";

//  GLOBALS & INITIALIZATION
//-------------------------------------------------------//

const LOCATION_TO_SAVE = "budgets/"


//  MAIN FUNCTION
//-------------------------------------------------------//

const SaveBudgetButton = (props) => {

  const { token } = useToken();

  const saveBudgets = async() => {
      try {
        for (var i = 0; i < props.budgets.length; i++){
          await putRequest(LOCATION_TO_SAVE + props.budgets[i].pk + "/", props.budgets[i], token); 
        }
        toast.success('Budget saved successfully!', {
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
          }
          else {
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
  }      

  const handleClick = async() => {
      saveBudgets();
      await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <>
    <Button color="primary"
            variant="outlined"
            fullWidth
            onClick={handleClick}>Save</Button>
    <ToastContainer />            
    </>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default SaveBudgetButton