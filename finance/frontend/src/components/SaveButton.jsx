// React Import
import React from 'react'

// MUI Import
import { Button } from '@mui/material'

// Axios Import
import { putRequest } from '../api/posts'

// Toast Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SaveButton = (props) => {

    const saveBudgets = async() => {
        try {
          for (var i = 0; i < props.itemToSave.length; i++){
            await putRequest(props.locationToSave + props.itemToSave[i].pk + "/", props.itemToSave[i]); 
          }
          toast.success('Budget successfully saved!', {
            position: "top-right",
            autoClose: 3000,
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

export default SaveButton