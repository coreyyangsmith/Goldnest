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
                                        minHeight:"300px",
                                        padding:"32px"}}>
                <Stack direction="column">                                      
                    <Typography variant='feature_heading'>
                        Is financial success on your horizon? Goldnest is here to help. What financial goals can we assist you in achieving?
                    </Typography>

                    <Typography variant='hero_content'>
                        With our customizable budget tracking web app, you're not just tracking expenses; you're charting a path to financial success. Embrace a brighter financial future with us today.
                    </Typography>
                </Stack>                      
            </Paper>
            </Grid>

            <Grid item xs={4} paddingLeft={2}>
            <Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"300px",
                                        padding:"32px"}}>
                <Typography variant='hero_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet a odio eget egestas. Nulla vel commodo nisi. Quisque euismod id sapien non maximus. Nam ultrices tempor risus sed gravida.</Typography>
            </Paper>
            </Grid>            
        </Grid>



    <Stack direction="row" spacing={2}>
        <LandingFeatureCard headingText={"Income Management"}
                            descriptionText={"Your earnings, your way. Effortlessly track your various sources of income, from salaries to investments, all in one place."}/>
        <LandingFeatureCard headingText={"Financial Forecasting"}
                            descriptionText={"See the future of your finances. Our advanced analytics and forecasting tools help you predict your financial trajectory, so you can plan with confidence."}/>
        <LandingFeatureCard headingText={"Customizable Templates"}
                            descriptionText={"Budgeting tailored to you. Create and personalize budget templates that align with your unique financial goals and lifestyle."}/>
        <LandingFeatureCard headingText={"Advanced Analytics"}
                            descriptionText={"Dive deep into your financial data. Gain valuable insights into your spending patterns and uncover opportunities for smarter financial choices."}/>            
    </Stack>

</Stack>      
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureContent