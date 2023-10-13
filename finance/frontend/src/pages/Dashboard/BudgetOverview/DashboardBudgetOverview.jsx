//-------------------------------------------------------//
//  File Name: DashboardBudgetOverview.jsx
//  Description: Paper to display today's date, and some info about this month.
//              Displays Budget and current Expenses-to-date for the current selected month
//
//  Requirements:
//      - Dashboard.jsx
//
//  Returns:
//      - Main Page for Dashboard
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState, useEffect } from 'react';

// MUI Imports
import { Divider, Paper, Stack, Typography, Box } from "@mui/material";

// My Componens
import DashboardMainCategorySmallPanel from './DashboardMainCategorySmallPanel'
import DashboardToDateSmallCard from './DashboardToDateSmallCard'

// My Custom Components
import CustomSlider from "../../../components/CustomSlider"


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardBudgetOverview = (props) => {

    // Custom Hooks
    const [budgetSliderCurr, setBudgetSliderCurr] = useState(0)
    const [budgetSliderMax, setBudgetSliderMax] = useState(9999)
    const [entrySliderCurr, setEntrySliderCurr] = useState(0)
    const [entrySliderMax, setEntrySliderMax] = useState(9999)    
    
    const [budgetSliderPercentage, setBugetSliderPercentage] = useState(budgetSliderCurr/budgetSliderMax)
    const [entrySliderPercentage, setEntrySliderPercentage] = useState(budgetSliderCurr/budgetSliderMax)

    const [daysPassed, setDaysPassed] = useState(5)
    const [daysRemaining, setDaysRemaining] = useState(25)

    const [budgetSpendPerDay, setBudgetSpendPerDay] = useState(0)
    const [budgetSpendPerDayRemaining, setBudgetSpendPerDayRemaining] = useState(0)
    const [expenseSpendPerDay, setExpenseSpendPerDay] = useState(0)
    const [expenseSpendPerDayRemaining, setExpenseSpendPerDayRemaining] = useState(0)

    const [timeframe, setTimeframe] = useState("");




    // Generates Micro Panels in Main Category Paper
    const myMainCategories = props.mainCategories.map((value, index) => {
        return  <React.Fragment>
            <DashboardMainCategorySmallPanel mainCategory={value}
                                                entries={props.entries}
                                                budgets={props.budgets}
                                                selectedYear={props.selectedYear}
                                                selectedMonth={props.selectedMonth}
                                                setSelectedMain={props.setSelectedMain}
                                                selectedMain={props.selectedMain}/>
        </React.Fragment>
    })
    
    function setPast(daysInMonth) {
        setDaysPassed(daysInMonth);
        setDaysRemaining(0);     
        setTimeframe("Past");  
        return
    }

    function setFuture(daysInMonth) {
        setDaysPassed(0);
        setDaysRemaining(daysInMonth);        
        setTimeframe("Future");      
        return
    }    


    // Grabs Information needed for Custom Sliders
    useEffect(() => {
        //Grab Today's date for reference
        const date = new Date();
        const month = date.toLocaleString('en-US', { month: 'numeric' }); 
        const year = date.getFullYear();
        const today = date.getDate();

        // Info for daysPassed/daysRemaining based on Today's date OR Selected Time Frame (ahead or behind today?)
        // If Current Month, calculate daysPassed/daysRemaining
        const daysInMonth =  new Date(props.selectedYear, props.selectedMonth + 1, 0).getDate();           
        if (month == props.selectedMonth && year == props.selectedYear)
        {
            const timeLeft = daysInMonth - today        
            setDaysPassed(today);
            setDaysRemaining(timeLeft);
            setTimeframe("Current");               
        }
        else if (year < props.selectedYear)     // Future Year
            setFuture(daysInMonth);
        else if (year > props.selectedYear)     // Past Year
            setPast(daysInMonth);
        else if (month < props.selectedMonth)   // Future Month
            setFuture(daysInMonth);
        else                                    // Past Month
            setPast(daysInMonth);


        // Slider Info for Budget
        //  - Current Budget Amount
        //  - Max Budget Amount
        //  - Slider Percentage

        const budgetForYear = props.budgets.filter(function(row) {
            return row.year == props.selectedYear;
        })
      
        const budgetByMonth = budgetForYear.filter(function(row) {
          return row.month == props.selectedMonth;
        })

        const mySummedBudget = budgetByMonth.reduce((total, budget) => total + budget.amount, 0);
        const myMaxBudget = Math.round(mySummedBudget);
        setBudgetSliderMax(myMaxBudget);

        const myCurrBudget = Math.round(mySummedBudget/daysPassed)
        setBudgetSliderCurr(myCurrBudget)

        const myCurrBudgetPercentage = Math.round((mySummedBudget/daysPassed)/mySummedBudget * 100)
        setBugetSliderPercentage(myCurrBudgetPercentage)

        // Set Textual Information
        setBudgetSpendPerDay(parseFloat(myCurrBudget/daysPassed).toFixed(2))

        const reminingBudget = mySummedBudget - (mySummedBudget/daysPassed);
        setBudgetSpendPerDayRemaining(parseFloat(reminingBudget/daysRemaining).toFixed(2));

        // Slider Info for Entries
        //  - Current Entry Amount
        //  - Max Entry Amount
        //  - Slider Percentage

        const entriesForYear = props.entries.filter(function(row) {
            return row.year == props.selectedYear;
        })
      
        const entiresByMonth = entriesForYear.filter(function(row) {
          return row.month == props.selectedMonth;
        })
        
        // "Max" (ie Target) should be equal to Budget Max
        setEntrySliderMax(myMaxBudget);

        const mySummedEntries = entiresByMonth.reduce((total, entry) => total + entry.expense, 0);
        const myCurrEntry = Math.round(mySummedEntries)
        setEntrySliderCurr(myCurrEntry)

        const myCurrEntryPercentage = Math.round((mySummedEntries)/myMaxBudget * 100)
        setEntrySliderPercentage(myCurrEntryPercentage)             

        // Set Textual Information
        setExpenseSpendPerDay(parseFloat(mySummedEntries/daysPassed).toFixed(2))
  
        const remainingEntries = mySummedBudget - mySummedEntries;
        setExpenseSpendPerDayRemaining(parseFloat(remainingEntries/daysRemaining).toFixed(2));    

        // Override for Past, Future
        if (timeframe === "Past") 
        {
            setBudgetSliderCurr(myMaxBudget);
            setBugetSliderPercentage(100);
            setBudgetSpendPerDay(parseFloat(myMaxBudget/daysPassed).toFixed(2));
            setBudgetSpendPerDayRemaining(0);            

            setExpenseSpendPerDay(parseFloat(mySummedEntries/daysPassed).toFixed(2));
            setExpenseSpendPerDayRemaining(0);                

        } else if (timeframe === "Future")
        {
            setBudgetSliderCurr(0);  
            setBugetSliderPercentage(0);            
            setBudgetSpendPerDay(0);
            setBudgetSpendPerDay(0);
            setBudgetSpendPerDayRemaining(parseFloat(myMaxBudget/daysRemaining).toFixed(2));     
            
            setExpenseSpendPerDay(parseFloat(mySummedEntries/1).toFixed(2));
            setExpenseSpendPerDayRemaining(parseFloat(remainingEntries/daysRemaining).toFixed(2));               
        }
              

    }, [props, daysPassed, daysRemaining])

    // Information Required for Custom Slides
    const budgetMarks = [
        {
            value: budgetSliderPercentage,
            label: '$' + budgetSliderCurr,
        },        
        {
            value: 100,
            label: '$' + budgetSliderMax,
        }
    ]

    const expenseMarks = [
        {
            value: entrySliderPercentage,
            label: '$' + entrySliderCurr,
        },        
        {
            value: 100,
            label: '$' + entrySliderMax,
        }
    ]    

    return (
    <>
    {/* Main Panel */}
    <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
        <Typography variant="dashboard_heading">Budget Overview</Typography>
        <Divider/>

        <Stack direction='column' spacing={2}>
            <Divider/>

            {/* Budget Slider */}      
            <Stack direction="row" spacing={1}>
                <Typography width="150px">Budget Estimate</Typography>
          
                <CustomSlider disabled 
                                marks={budgetMarks} 
                                defaultValue={budgetSliderPercentage}
                                value={budgetSliderPercentage}/>

                <DashboardToDateSmallCard   title={"Spent To date"}
                                            number={budgetSpendPerDay}
                                            percentage={budgetSliderPercentage}/>   

                <DashboardToDateSmallCard   title={"Remaining"}
                                            number={budgetSpendPerDayRemaining}
                                            percentage={100-budgetSliderPercentage}/>                   
            </Stack>    

            {/* Expenses Slider */}  
            <Stack direction="row" spacing={1}>
                <Typography width="150px">Actual Expenses</Typography>
                <CustomSlider disabled 
                                marks={expenseMarks} 
                                defaultValue={entrySliderPercentage}
                                value={entrySliderPercentage}/>

                    <DashboardToDateSmallCard   title={"Spent To date"}
                                                number={expenseSpendPerDay}
                                                percentage={entrySliderPercentage}/>       

                    <DashboardToDateSmallCard   title={"Remaining"}
                                                number={expenseSpendPerDayRemaining}
                                                percentage={100-entrySliderPercentage}/>                                                       
            </Stack>        

            {/* Main Categories Box */}  
            <Paper  sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} 
                    style={{display:"flex", flexDirection:"row", overflow:"scroll"}}>
                <Stack direction="column">
                    <Typography>Main Categories</Typography>
                        <Stack direction="row" spacing={2} sx={{paddingTop: "16px",
                                                                paddingBottom: "16px"}}>
                            {myMainCategories}
                        </Stack>                                    
                </Stack>

            </Paper>    
        </Stack>     
    </Paper>    
    </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardBudgetOverview;