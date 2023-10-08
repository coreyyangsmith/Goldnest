//-------------------------------------------------------//
//  File Name: Dashboard.jsx
//  Description: Main Page after Login
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Dashboard
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Imports
import { useEffect, useState } from 'react';

// My Page Imports
import DashboardTopHeading from './TopHeading/DashboardTopHeading'
import DashboardBudgetOverview from './BudgetOverview/DashboardBudgetOverview'
import DashboardSpendingOverview from './SpendingOverview/DashboardSpendingOverview'

// MUI Imports
import { Grid, Typography } from '@mui/material'

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useSubCategory } from '../../hooks/useSubCategory';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport';
import DashboardCategoryBreakdown from './CategoryBreakdown/DashboardCategoryBreakdown';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Dashboard = () => {
    const { mainCategories } = useMainCategory();
    const { subCategories } = useSubCategory();
    const { entries } = useEntries();
    const { budgets } = useBudget();            

    const [selectedYear, setSelectedYear] = useState(2023)
    const [selectedMonth, setSelectedMonth] = useState(1)

    // Grab Today for selectedYear, selectedMonth
    useEffect(() => {
        const date = new Date();
        const month = date.toLocaleString('en-US', { month: 'numeric' }); 
        const year = date.getFullYear();   
        
        setSelectedYear(year);
        setSelectedMonth(month);        
    },[])

    return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <DashboardTopHeading    selectedYear={selectedYear}
                                    setSelectedYear={setSelectedYear}
                                    selectedMonth={selectedMonth}
                                    setSelectedMonth={setSelectedMonth}/>
        </Grid>

        <Grid item xs={8}>
            <DashboardBudgetOverview    mainCategories={mainCategories}
                                        subCategories={subCategories}
                                        entries={entries}
                                        budgets={budgets}
                                        selectedYear={selectedYear}
                                        selectedMonth={selectedMonth}/>
        </Grid>          
        <Grid item xs={4}>         
            <DashboardSpendingOverview  selectedYear={selectedYear}
                                        selectedMonth={selectedMonth}
                                        entries={entries}
                                        budgets={budgets}/>                                        
        </Grid>

        <Grid item xs={8}>
            <DashboardCategoryBreakdown selectedYear={selectedYear}
                                        selectedMonth={selectedMonth}
                                        entries={entries}
                                        budgets={budgets}
                                        mainCategories={mainCategories}/>

        </Grid>
    </Grid>
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default Dashboard;