//-------------------------------------------------------//
//  File Name: Backdrop.jsx
//  Description: Backdrop component for modal use.
//
//  Requirements:
//      - None
//
//  Returns:
//      - Backdrop overlay component
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


//  MAIN FUNCTION
//-------------------------------------------------------//

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
          onClick={onClick}
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      );
    };

//  EXPORTS
//-------------------------------------------------------//

export default Backdrop