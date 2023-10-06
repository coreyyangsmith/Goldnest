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
import { Typography, Grid, Stack, Paper } from '@mui/material'

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
<Stack spacing={2} direction="column" sx={{marginTop: 5}}>

    {/* Top Info */}

    <Typography variant='feature_heading' paddingTop={4}>Our Prices</Typography>
    <Stack direction="row" spacing={2}>
        <LandingPriceCard headingText={"Income Management"}
                            descriptionText={"Your earnings, your way. Effortlessly track your various sources of income, from salaries to investments, all in one place."}
                            icon={<PaymentsIcon/>}
                            path="/login"/>
        <LandingPriceCard headingText={"Financial Forecasting"}
                            descriptionText={"See the future of your finances. Our advanced analytics and forecasting tools help you predict your financial trajectory, so you can plan with confidence."}
                            icon={<InsightsIcon/>}
                            path="/login"/>
        <LandingPriceCard headingText={"Customizable Templates"}
                            descriptionText={"Budgeting tailored to you. Create and personalize budget templates that align with your unique financial goals and lifestyle."}
                            icon={<FeedIcon/>}
                            path="/login"/>         
    </Stack>

</Stack>      
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingPriceContent