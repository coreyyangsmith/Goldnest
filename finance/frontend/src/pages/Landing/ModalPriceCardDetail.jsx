//-------------------------------------------------------//
//  File Name: ModalPriceCardDetail.jsx
//  Description: Modal for Price Card Detail
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
import Backdrop from '../../components/Backdrop'
import LandingPriceCardDetail from './LandingPriceCardDetail';


//  UTILITY
//-------------------------------------------------------//

// Data to further define animaiton
const dropIn = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: "100vw",
      opacity: 0,
    },
  };

//  MAIN FUNCTION
//-------------------------------------------------------//

const Modal = (props, { handleClose }) => {  

return (
    <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}  
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LandingPriceCardDetail   tierText={props.tierText}
                                    tierColor={props.tierColor}
                                    tierTextColor={props.tierTextColor}
                                    priceAmount={props.priceAmount}
                                    priceText={props.priceText}
                                    features={props.features}
                                    featureDescriptions={props.featureDescriptions}      
                                    cardBtnColor={props.cardBtnColor}
                                    cardBtnText={props.cardBtnText}                                                                          
                                    handleClose={props.handleClose}
          />        
        
        </motion.div>
    </Backdrop>  
)    
}

//  EXPORTS
//-------------------------------------------------------//

export default Modal