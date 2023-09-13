// React Import
import React from 'react'

// MUI Import
import { Box, Grid } from '@mui/material/';

// My Components
import DoughnutReport from "./DoughnutReport";
import ExpensesByMainCategory from './ExpensesByMainCategory';
import NetWorthLineChart from './NetWorthLineChart';
import MyD3Component from './MyD3Chart';

const Reports = () => {
    return <>
    <h2>Welcome to My Reports</h2>
    
    <Grid container spacing={2}>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <DoughnutReport/>
            </Box>
        </Grid>

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <ExpensesByMainCategory/>
            </Box>      
        </Grid>     

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <NetWorthLineChart />
            </Box>      
        </Grid>          

        <Grid item xs={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <MyD3Component data = {[10, 20, 30]}/>
            </Box>      
        </Grid>                 

                



    </Grid>


    </>
}

export default Reports;