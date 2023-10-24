//-------------------------------------------------------//
//  File Name: DashboardBudgetExpensesLineChart.jsx
//  Description: To display line chart for the selected year/month, detailing and expenses throughout the month
//
//  Requirements:
//      - DashboardSpendingOverview.jsx
//      - Budget Data (prop)
//      - Expenses Data (prop)
//      - selectedYear (prop)
//      - selectedMonth (prop)
//
//  Returns:
//      -  ECharts Line Chart
//
// Created By: Corey Yang-Smith
// Date: October 8th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react';

// ECharts
import ReactEcharts from "echarts-for-react";


//  MAIN FUNCTION
//-------------------------------------------------------//

const DashboardBudgetExpensesLineChart = (props) => {
    // Custom Hooks
    const [entryData, setEntryData] = useState([]);
    const [budgetData, setBudgetData] = useState([]);    
    const [days, setDays] = useState([]);        

    // Process budget and entries into appropriate datasets based on selected year and month
    useEffect(() => {

        //Entries
        function getCumulativeEntriesByDay() {

            // Filter Initial Entries Data
            const entriesForYear = props.entries.filter(function(row) {
                return row.year == props.selectedYear;
            })
        
            const entiresByMonth = entriesForYear.filter(function(row) {
                return row.month == props.selectedMonth;
            })              

            // Create new map to store cumulative amounts
            const cumulativeEntriesByDay = new Map();

            //Iterate through entries and accumulative amounts foreach day
            entiresByMonth.forEach((entry) => {
                const date = new Date(entry.date);
                const day = date.getDate();
                const month = date.getMonth();

            // Initialize cumulative amount if day doesnt exist
            if (!cumulativeEntriesByDay.has(day)){
                cumulativeEntriesByDay.set(day, 0);
            }

            // Accumulative th amount for the day
            cumulativeEntriesByDay.set(day, cumulativeEntriesByDay.get(day) + entry.expense);
            });

            // Create Array to Output
            const cumulativeEntryArray = [];

            let cumulativeSum = 0;

            for (let day = 1; day <= 31; day++) {
                if (cumulativeEntriesByDay.has(day)) {
                    cumulativeSum += cumulativeEntriesByDay.get(day);
                }
                cumulativeEntryArray.push(cumulativeSum);
            }

            return cumulativeEntryArray;
        }
        if (props.entries.length > 0)
            setEntryData(getCumulativeEntriesByDay());    

        //Budgets
        function getCumulativeBudgetByDay() {

            // Filter Initial Entries Data
            const budgetForYear = props.budgets.filter(function(row) {
                return row.year == props.selectedYear;
            })
          
            const budgetByMonth = budgetForYear.filter(function(row) {
              return row.month == props.selectedMonth;
            })

            const mySummedBudget = budgetByMonth.reduce((total, budget) => total + budget.amount, 0);

            const cumulativeBudgetArray = []
            const daysInMonth =  new Date(props.selectedYear, props.selectedMonth + 1, 0).getDate();  
            const stepSize = mySummedBudget / (daysInMonth - 1);
            for (let i = 0; i < daysInMonth; i++)
            {
                const value = parseFloat(i * stepSize).toFixed(2);
                cumulativeBudgetArray.push(value);
            }
            return cumulativeBudgetArray;
        }
        if (props.entries.length > 0)
            setBudgetData(getCumulativeBudgetByDay());            

        // Days
        function getDaysInMonth() {
            const daysInMonth =  new Date(props.selectedYear, props.selectedMonth + 1, 0).getDate();
            const daysArray = []

            for (let i = 1; i <= daysInMonth; i++)
                daysArray.push(i);

            return daysArray
        }
        setDays(getDaysInMonth());
    }, [props])

    const option = {
        title: {
          text: 'Budget vs Expenses',
          top: '1%',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Budget', 'Expenses'],
          top: '9%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
          data: days
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Budget',
            type: 'line',
            stack: 'x',
            data: budgetData
          },
          {
            name: 'Expenses',
            type: 'line',
            stack: 'y',
            data: entryData
          },
        ]
      };

    return (
        <>
            <ReactEcharts option={option}/>
        </>)
}


//  EXPORTS
//-------------------------------------------------------//

export default DashboardBudgetExpensesLineChart;