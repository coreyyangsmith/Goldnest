// React Import
import React from 'react'

// MUI Import
import { Box } from '@mui/material/';

// My Components
import DoughnutReport from "./DoughnutReport";


const Reports = () => {
    return <>
    <h2>Welcome to My Reports</h2>
    
    <Box sx={{
        width: 300,
        height: 300
    }}>
        <DoughnutReport/>
    </Box>

    </>
}

export default Reports;