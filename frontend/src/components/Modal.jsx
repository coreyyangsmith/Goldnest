//-------------------------------------------------------//
//  File Name: Modal.jsx
//  Description: Dummy modal template.
//
//  Requirements:
//      - Backdrop.jsx
//
//  Returns:
//      - Modal overlay
//
// Created By: Corey Yang-Smith
// Date: October 7th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React from 'react'

// Animation Import
import { motion } from "framer-motion";

// My Components
import Backdrop from './Backdrop'


//  UTILITY
//-------------------------------------------------------//

// Data to further define animaiton
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

//  MAIN FUNCTION
//-------------------------------------------------------//

const Modal = ({ handleClose, text }) => {  

return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
              <p>{text}</p>
              <button onClick={handleClose}>Close</button>
        </motion.div>
    </Backdrop>  
)    
}

//  EXPORTS
//-------------------------------------------------------//

export default Modal