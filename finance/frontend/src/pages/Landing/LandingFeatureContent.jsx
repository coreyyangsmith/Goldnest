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
import { Typography, Grid, Stack, Paper } from '@mui/material'

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
<Stack spacing={2} direction="column" sx={{marginTop: 5}}>

    {/* Top Info */}
        <Grid container>
            <Grid item xs={8}>
            <Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"350px",
                                        padding:"32px"}}>
                <Stack direction="column">                                      
                    <Typography variant='feature_heading' paddingTop={4}>
                        Is financial success on your horizon? 
                        <Typography  variant='feature_heading'
                            sx={{
                                background: "linear-gradient(to right, #ffc700, #ff8e37, #ff516e, #fc31a6, #a849d3)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                height: '1500px'                           
                    }}>Goldnest</Typography> is here to help. What financial goals can we assist you in achieving?
                    </Typography>

                    <Typography variant='hero_content' paddingBottom={4}>
                        With our customizable budget tracking web app, you're not just tracking expenses; you're charting a path to financial success. Embrace a brighter financial future with us today.
                    </Typography>
                </Stack>                      
            </Paper>
            </Grid>

            <Grid item xs={4} paddingLeft={2}>
            <Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"350px",
                                        padding:"32px"}}>
                <Typography variant='hero-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet a odio eget egestas. Nulla vel commodo nisi. Quisque euismod id sapien non maximus. Nam ultrices tempor risus sed gravida.</Typography>
            </Paper>
            </Grid>            
        </Grid>


    <Typography variant='feature_heading' paddingTop={4}>How We Help</Typography>
    <Stack direction="row" spacing={2}>
        <LandingFeatureCard headingText={"Income Management"}
                            descriptionText={"Your earnings, your way. Effortlessly track your various sources of income, from salaries to investments, all in one place."}
                            icon={<PaymentsIcon/>}
                            path="/login"/>
        <LandingFeatureCard headingText={"Financial Forecasting"}
                            descriptionText={"See the future of your finances. Our advanced analytics and forecasting tools help you predict your financial trajectory, so you can plan with confidence."}
                            icon={<InsightsIcon/>}
                            path="/login"/>
        <LandingFeatureCard headingText={"Customizable Templates"}
                            descriptionText={"Budgeting tailored to you. Create and personalize budget templates that align with your unique financial goals and lifestyle."}
                            icon={<FeedIcon/>}
                            path="/login"/>
        <LandingFeatureCard headingText={"Advanced Analytics"}
                            descriptionText={"Dive deep into your financial data. Gain valuable insights into your spending patterns and uncover opportunities for smarter financial choices."}
                            icon={<AssessmentIcon/>}
                            path="/login"/>            
    </Stack>

</Stack>      
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureContent