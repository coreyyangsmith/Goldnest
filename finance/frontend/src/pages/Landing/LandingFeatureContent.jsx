//-------------------------------------------------------//
//  File Name: LandingFeatureContent.jsx
//  Description: Centered Feature Content displayed on Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Feature Content Block
//
// Created By: Corey Yang-Smith
// Date: October 5th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import React from 'react'

// MUI Imports
import { Typography, Box, Stack } from '@mui/material'

// MUI Icon Import
import PaymentsIcon from '@mui/icons-material/Payments';
import InsightsIcon from '@mui/icons-material/Insights';
import FeedIcon from '@mui/icons-material/Feed';
import AssessmentIcon from '@mui/icons-material/Assessment';

// My Components
import LandingFeatureCard from './LandingFeatureCard'


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureContent = () => {
  return (
    <Box marginTop="16px">
      <Typography id="features" variant='feature_heading'>How We Help</Typography>

    <Stack direction="row" spacing={2} justifyContent="center" marginTop="8px">

        
        <LandingFeatureCard headingText={"Income Management"}
                            descriptionText={"Your earnings, your way. Effortlessly track your various sources of income, from salaries to investments, all in one place."}
                            icon={<PaymentsIcon/>}
                            path="/login"
                            
                            detailHeadingText={"Income Management"}
                            largeIcon={<PaymentsIcon sx={{fontSize: '50px'}}/>}
                            basicFeatures={["Track the state of your various accounts, cards, and cash.", "Record your expenses and catalogue them the way you want to."]}
                            proFeatures={["Set up automated income/expenses for recurring entries.",]}
                            powerFeatures={["Add your investments direcly for live market updates, without having to check your accounts."]}                            
                            />

        <LandingFeatureCard headingText={"Financial Forecasting"}
                            descriptionText={"See the future of your finances. Our advanced analytics and forecasting tools help you predict your financial trajectory, so you can plan with confidence."}
                            icon={<InsightsIcon/>}
                            path="/login"
                            
                            detailHeadingText={"Financial Forecasting"}
                            largeIcon={<InsightsIcon sx={{fontSize: '50px'}}/>}
                            basicFeatures={["Gain insights and live updates on your budget throughout the month, based on your spending."]}
                            proFeatures={["Chart your financial growth over the years with our long-term net worth tracking.", "Set ambitious goals to tackle your debt, or reach your savings milestones."]}
                            powerFeatures={["Gain access to our advanced FI (Financial Independence) calculator to plan your retirement."]}                            
                            />

        <LandingFeatureCard headingText={"Customizable Templates"}
                            descriptionText={"Budgeting tailored to you. Create and personalize budget templates that align with your unique financial goals and lifestyle."}
                            icon={<FeedIcon/>}
                            path="/login"
                            
                            detailHeadingText={"Customizable Templates"}
                            largeIcon={<FeedIcon sx={{fontSize: '50px'}}/>}
                            basicFeatures={["Select 1 of our budget templates to help get you started.", "Ability to create and customize your own budget templates."]}
                            proFeatures={["Access to all of our budget templates", "Ability to import budget templates."]}
                            powerFeatures={["Ability to save and export your own budget templates."]}                            
                            />

        <LandingFeatureCard headingText={"Advanced Analytics"}
                            descriptionText={"Dive deep into your financial data. Gain valuable insights into your spending patterns and uncover opportunities for smarter financial choices."}
                            icon={<AssessmentIcon/>}
                            path="/login"
                            
                            detailHeadingText={"Advanced Analytics"}
                            largeIcon={<AssessmentIcon sx={{fontSize: '50px'}}/>}
                            basicFeatures={["Access to basic analytics based on your financial data."]}
                            proFeatures={["Access to advanced analytics based on your financial data.", "Export your generated financial report to PDF for your own personal record keeping."]}
                            powerFeatures={["Export all your data to .csv for your own data analysis needs", "Ability to curate custom reports, using our store of advanced analytics."]}                            
                            />            
    </Stack>                                           
</Box>
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureContent