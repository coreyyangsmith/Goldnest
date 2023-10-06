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
import LandingFeatureCardDetail from './LandingFeatureCardDetail'


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingFeatureContent = () => {
  return (
<Stack spacing={2} direction="column" sx={{marginTop: 5}}>

    {/* Top Info */}

        <Grid container>
            <Grid item xs={8}>
            <Paper elevation={2} sx={{background: '#f3f3f3', 
                                        minHeight:"400px",
                                        maxHeight: "600px",
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
                                        minHeight:"400px",
                                        maxHeight: "550px",
                                        padding:"32px"}}>
                <Typography variant='hero-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet a odio eget egestas. Nulla vel commodo nisi. Quisque euismod id sapien non maximus. Nam ultrices tempor risus sed gravida.</Typography>
            </Paper>
            </Grid>            
        </Grid>

    <div id="features"></div>
    <Typography variant='feature_heading'>How We Help</Typography>
    <Stack direction="row" spacing={2} justifyContent="center">

        
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

    <LandingFeatureCardDetail   headingText={"Income Management"}
                                icon={<PaymentsIcon sx={{fontSize: '50px'}}/>}
                                basicFeatures={["Track the state of your various accounts, cards, and cash.", "Record your expenses and catalogue them the way you want to."]}
                                proFeatures={["Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum."]}
                                powerFeatures={["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}/> 

    <LandingFeatureCardDetail   headingText={"Financial Forecasting"}
                                icon={<InsightsIcon sx={{fontSize: '50px'}}/>}
                                basicFeatures={["Gain insights and live updates on your budget throughout the month, based on your spending."]}
                                proFeatures={["Chart your financial growth over the years with our long-term net worth tracking.", "Set ambitious goals to tackle your debt, or reach your savings milestones."]}
                                powerFeatures={["Gain access to our advanced FI (Financial Independence) calculator to plan your retirement."]}/>   

    <LandingFeatureCardDetail   headingText={"Customizable Templates"}
                                icon={<FeedIcon sx={{fontSize: '50px'}}/>}
                                basicFeatures={["Select 1 of our budget templates to help get you started.", "Ability to create and customize your own budget templates."]}
                                proFeatures={["Access to all of our budget templates", "Ability to import budget templates."]}
                                powerFeatures={["Ability to save and export your own budget templates."]}/>   
                                
    <LandingFeatureCardDetail   headingText={"Advanced Analytics"}
                                icon={<AssessmentIcon sx={{fontSize: '50px'}}/>}
                                basicFeatures={["Access to basic analytics based on your financial data."]}
                                proFeatures={["Access to advanced analytics based on your financial data.", "Export your generated financial report to PDF for your own personal record keeping."]}
                                powerFeatures={["Export all your data to .csv for your own data analysis needs", "Ability to curate custom reports, using our store of advanced analytics."]}/>                                                  

</Stack>      
    )
}


//  EXPORTS
//-------------------------------------------------------//

export default LandingFeatureContent