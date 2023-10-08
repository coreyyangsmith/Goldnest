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

// My Page Imports
import DashboardBudgetOverview from './BudgetOverview/DashboardBudgetOverview'

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
    const { mainCategories } = useMainCategory();
    const { subCategories } = useSubCategory();
    const { entries } = useEntries();
    const { budgets } = useBudget();            



    return (
    <>
    <Grid container>

        <Grid item xs={8}>
            <DashboardBudgetOverview    mainCategories={mainCategories}
                                        subCategories={subCategories}
                                        entries={entries}
                                        budgets={budgets}/>
        </Grid>
    </Grid>
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default Dashboard;