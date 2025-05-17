//-------------------------------------------------------//
//  File Name: ConfirmationDialog.jsx
//  Description: Generated a confirmation dialog (used for mainCat/subCat deletion)
//
//  Requirements:
//      - open/setOpen State from Parent
//      - handleClose function from Parent
//      - handleConfirmation function from Parent
//      - category (to be deleted)
//
//  Returns:
//    - Confirmation Dialog
//
// Created By: Corey Yang-Smith
// Date: September 29th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import React from 'react'

// MUI Imports
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


//  UTILITY
//-------------------------------------------------------//

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


//  MAIN FUNCTION
//-------------------------------------------------------//

const ConfirmationDialog = (props) => {
  return ( 
  <Dialog
    open={props.open}
    TransitionComponent={Transition}
    keepMounted
    onClose={props.handleClose}
    aria-describedby="alert-dialog-slide-description">
      <DialogTitle>{props.category.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Deleting a Category will erase all its associated data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" variant="outlined" onClick={(e) => props.handleClose()}>Close</Button>
        <Button color="primary" onClick={(e) => props.handleConfirmation(props.category, props.open)}>Confirm</Button>
      </DialogActions>
  </Dialog>
  )
}

//  EXPORTS
//-------------------------------------------------------//

export default ConfirmationDialog