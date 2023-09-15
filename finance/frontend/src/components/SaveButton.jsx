// React Import
import React from 'react'

// MUI Import
import { Button } from '@mui/material'

// Axios Import
import axios from 'axios';

const SaveButton = (props) => {

    const handleClick = async() => {
        //TODO update request with axios
        console.log(props.itemToSave);
        axios.post(props.locationToSave, props.itemToSave);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("successfully updated budget!");

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