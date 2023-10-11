//-------------------------------------------------------//
//  File Name: LandingPriceContent.jsx
//  Description: Centered Price Content displayed on Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Price Content Block
//
// Created By: Corey Yang-Smith
// Date: October 5th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React from 'react'

// MUI Imports
import { Typography, Grid, Box } from '@mui/material'

// My Components
import LandingFeatureCard from './LandingFeatureCard'
import LandingPriceCard from './LandingPriceCard';



//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingPriceContent = () => {

  return (
<Box marginTop="16px">
    {/* Top Info */}
    <Typography id="price" variant='feature_heading'>Our Prices</Typography>
        <Grid container spacing={2} justifyContent="center">

        <Grid item sx={4}>
        <Box>
        <LandingPriceCard   tierText={"Basic"}
                            tierColor={"#dbdbdb"}
                            tierTextColor={"#5c5c5c"}
                            priceAmount={"$0"}                            
                            priceText={"A free community version of everything, for free!"}
                            features={["1 Budget Template", 
                                        "Budget Planning", 
                                        "Expense Tracking", 
                                        "Basic Analytics"]}
                            featureDescriptions={["Access to one of our premade budget templates to set you off on the right foot.",
                                                  "Set realistic financial goals, allocate funds wisely, and watch your dreams become a reality.",
                                                  "Our expense tracking tool makes it easy to monitor every transaction, so you can make informed financial decisions.",
                                                  "Visualize your spending patterns, identify trends, and pave the way to a more financially secure future."]}
                            btnColor={"primary"}
                            btnText={"Lear More"}
                            cardBtnColor={"primary"}
                            cardBtnText={"Get Started"}                                
                            path="/login"/>
        </Box>                            
        </Grid>                            

        <Grid item sx={4}>
        <Box>            
        <LandingPriceCard   tierText={"Pro"}
                            tierColor={"#F2EEC8"}
                            tierTextColor={"#C9A800"}                            
                            priceAmount={"$9"}
                            priceText={"One lifetime license for the financially-savvy who value long term planning."}
                            features={["Everything from Basic", 
                                        "3 Budget Templates", 
                                        "Net Worth Tracking", 
                                        "Export PDF Reports", 
                                        "Advanced Analytics"]}
                            featureDescriptions={["Gain access to everything in our previous tiers.", 
                                                  "Select three of our premade budget templates to cut down on your planning time.", 
                                                  "Chart your financial growth over the years with our long-term net worth tracking and planning tools.", 
                                                  "Easily save your insightful reports as PDF documents, so you can access and share your financial insights anytime, anywhere.", 
                                                  "Empower your financial future with Advanced Analytics—uncover insights, spot trends, and optimize your strategy like never before."]}
                            
                            btnColor={"primary"}
                            btnText={"Learn More"}
                            cardBtnColor={"primary"}
                            cardBtnText={"Get Started"}                                
                            path="/login"/>
        </Box>                            
        </Grid>                         

        <Grid item sx={4}>
        <Box>            
        <LandingPriceCard   tierText={"Power"}
                            tierColor={"#A7E4F8"}
                            tierTextColor={"#2593F9"}
                            priceAmount={"$29"}
                            priceText={"Power features for data-driven users who wants their data, their own way."}
                            features={["Everything from Basic and Pro",
                                        "All Budget Templates", 
                                        "Multiple Users",   
                                        "FI Calculator",
                                        "Export Raw Data", 
                                        "Custom Reports"]}
                            featureDescriptions={["Gain access to everything in our previous tiers.", 
                                                  "Access to all of our premade budget templates to get everything you need.", 
                                                  "Ability to swap between multiple user accounts - great for households, businesses, or other accounts.", 
                                                  "Take control of your financial future with our FI calculator. Determine how close you are to achieving financial independence and plan your path to freedom.",
                                                  "Effortlessly export your valuable financial data to CSV format, unlocking endless possibilities for analysis, sharing, and customization.",
                                                  "Craft tailored financial insights with ease using our Custom Reports feature, putting you in control of the data that matters most to you."]}
                                                        
                            btnColor={"primary"}
                            btnText={"Learn More"}
                            cardBtnColor={"grayBtn"}
                            cardBtnText={"Coming Soon"}                            
                            path="/login"/>     
        </Box>                            
        </Grid>                            
                               
        </Grid>
  </Box> 
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingPriceContent