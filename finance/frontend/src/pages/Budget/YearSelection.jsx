//React Imports
import React from 'react'

// MUI Imports
import { Grid, TextField } from '@mui/material'

const YearSelection = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <h1>Selected Year:</h1>
        </Grid>
        <Grid item xs={4}>
            <TextField></TextField>
        </Grid>

    </Grid>
  )
}

export default YearSelection