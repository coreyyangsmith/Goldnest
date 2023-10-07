//-------------------------------------------------------//
//  File Name: LandingFeatureCard.jsx
//  Description: Centered Feature Content displayed on Landing Page
//
//  Requirements:
//      - LandingFeatureContent.jsx
//
//  Returns:
//      - Feature Card
//
// Created By: Corey Yang-Smith
// Date: October 5th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React, { useState } from 'react'

// MUI Imports
import { Typography, Stack, Paper } from '@mui/material'

// Styling and Routing
import CardLink from '../../components/CardLink'

// Animation Import
import { motion, AnimatePresence } from "framer-motion";

// My Components
import Modal from '../../components/Modal'

//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureCard = (props) => {
    // My Hooks
    const [modalOpen, setModalOpen] = useState(false)

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);



  return (
<Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"150px",
                                        padding:"32px"}}>
    <Stack direction="column" paddingTop={3} paddingBottom={3}>
        {props.icon}
        <Typography variant='card_heading' paddingTop={2}>{props.headingText}</Typography>
        <Typography variant='card_body'>{props.descriptionText}</Typography>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=''
          onClick={() => {modalOpen ? close() : open()}}
          >
            <Typography variant='card_link' paddingTop={2}>
              Learn More ➥
            </Typography>
        </motion.button>


        {modalOpen && <Modal text={"testing"} modalOpen={modalOpen} handleClose={close} />}                                 
       
    </Stack>

</Paper>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureCard