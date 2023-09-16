// React Import
import React from 'react'

// MUI Import
import { Button } from '@mui/material'

// Axios Import
import axios from 'axios';
import { putRequest } from '../api/posts'

const SaveButton = (props) => {

    const saveBudgets = async() => {
        try {
          for (var i = 0; i < props.itemToSave.length; i++){
            await putRequest(props.locationToSave + props.itemToSave[i].pk + "/", props.itemToSave[i]); 
          }
           
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
    </>
  )
}

export default SaveButton