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
import DashboardCategoryBreakdown from './CategoryBreakdown/DashboardCategoryBreakdown';
import DashboardSubCategoryBreakdown from './CategoryBreakdown/DashboardSubCategoryBreakdown';
import DashboardSpendingCategoryOverview from './SpendingOverview/DashboardSpendingCategoryOverview';

// MUI Imports
import { Grid } from '@mui/material'

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useSubCategory } from '../../hooks/useSubCategory';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Dashboard = () => {    
    const [selectedYear, setSelectedYear] = useState(2023);
    const [selectedMonth, setSelectedMonth] = useState(1);
    const [selectedMain, setSelectedMain] = useState("");

    const { mainCategories } = useMainCategory();
    const { subCategories, setSubCategories } = useSubCategory(selectedMain);
    const { entries } = useEntries();
    const { budgets } = useBudget();            

    // Grab Today for selectedYear, selectedMonth
    useEffect(() => {
        const date = new Date();
        const month = date.toLocaleString('en-US', { month: 'numeric' }); 
        const year = date.getFullYear();   
        
        setSelectedYear(year);
        setSelectedMonth(month);      
            
    },[selectedMain])

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
                                        selectedMonth={selectedMonth}
                                        setSelectedMain={setSelectedMain}/>
        </Grid>          
        <Grid item xs={4}>         
            <DashboardSpendingOverview  selectedYear={selectedYear} // REPLACE WITH ??
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

        <Grid item xs={4}>
            <DashboardSpendingOverview  selectedYear={selectedYear}
                                        selectedMonth={selectedMonth}
                                        entries={entries}
                                        budgets={budgets}/>   
        </Grid>

        <Grid item xs={8}>
            <DashboardSubCategoryBreakdown  selectedYear={selectedYear}
                                            selectedMonth={selectedMonth}
                                            entries={entries}
                                            budgets={budgets}
                                            subCategories={subCategories}
                                            selectedMain={selectedMain}/>
        </Grid>   
        <Grid item xs={4}>
            <DashboardSpendingCategoryOverview  selectedYear={selectedYear}
                                                selectedMonth={selectedMonth}
                                                entries={entries}
                                                budgets={budgets}
                                                selectedMain={selectedMain}/>   


        </Grid>                
    </Grid>
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default Dashboard;