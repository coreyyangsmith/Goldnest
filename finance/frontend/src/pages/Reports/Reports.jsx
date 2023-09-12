// React Import
import React from 'react'

// MUI Import
import { Box, Grid } from '@mui/material/';

// My Components
import DoughnutReport from "./DoughnutReport";
import ExpensesByMainCategory from './ExpensesByMainCategory';

const Reports = () => {
    return <>
    <h2>Welcome to My Reports</h2>
    
    <Grid container spacing={2}>
        <Grid item spacing={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <DoughnutReport/>
            </Box>
        </Grid>

        <Grid item spacing={6}>
            <Box sx={{
                width: 300,
                height: 300
            }}>
                <ExpensesByMainCategory/>
            </Box>      
        </Grid>          

    </Grid>


    </>
}

export default Reports;