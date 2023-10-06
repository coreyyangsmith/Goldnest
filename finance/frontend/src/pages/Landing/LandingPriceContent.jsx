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
import { Typography, Grid, Stack, Box } from '@mui/material'

// MUI Icon Import
import PaymentsIcon from '@mui/icons-material/Payments';
import InsightsIcon from '@mui/icons-material/Insights';
import FeedIcon from '@mui/icons-material/Feed';
import AssessmentIcon from '@mui/icons-material/Assessment';

// My Components
import LandingFeatureCard from './LandingFeatureCard'
import LandingPriceCard from './LandingPriceCard';



//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingPriceContent = () => {

  return (
<>
    {/* Top Info */}
    <Typography variant='feature_heading' paddingTop={4}>Our Prices</Typography>
        <div id="price"></div>
        <Grid container spacing={2} justifyContent="center">

        <Grid item sx={4}>
        <Box>
        <LandingPriceCard   tierText={"Basic"}
                            tierColor={"#dbdbdb"}
                            tierTextColor={"#5c5c5c"}
                            priceAmount={"$0"}                            
                            priceText={"A free community version of everything, for free!"}
                            features={["1 Budget Template", "Budget Planning", "Expense Tracking", "Basic Analytics"]}
                            btnColor={"primary"}
                            btnText={"Get Started"}
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
                            features={["Everything from Basic", "3 Budget Templates", "Net Worth Tracking", "Export PDF Reports", "Advanced Analytics"]}

                            btnColor={"primary"}
                            btnText={"Get Started"}
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
                            features={["Everything from Basic and Pro", "Multiple Users", "Export Raw Data", "Custom Reports"]}
                            
                            btnColor={"grayBtn"}
                            btnText={"Coming Soon"}
                            path="/login"/>     
        </Box>                            
        </Grid>                            
                               
        </Grid>
</>    
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingPriceContent