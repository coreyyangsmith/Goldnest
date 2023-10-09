//-------------------------------------------------------//
//  File Name: DashboardSubCategoryStackedBar.jsx
//  Description: To display stacked bar chart for the selected year/month, detailing and expenses throughout the month
//
//  Requirements:
//      - DashboardCategoryBreakdown.jsx
//      - Budget Data (prop)
//      - Expenses Data (prop)
//      - selectedYear (prop)
//      - selectedMonth (prop)
//      - subCategories (prop)
//      - selectedMain (prop)
//
//  Returns:
//      -  ECharts Stacked Bar Chart
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

const DashboardSubCategoryStackedBar = (props) => {
    // Custom Hooks
    const [entryData, setEntryData] = useState([]);
    const [budgetData, setBudgetData] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    // Process budget and entries into appropriate datasets based on selected year and month
    useEffect(() => {
      // Map Categories
      function getSubCategoriesList() {
        const subCategoriesArray = [];
        if (props.subCategories != undefined)
          props.subCategories.forEach((subCat) => subCategoriesArray.push(subCat.name))
        return subCategoriesArray;
      }
      setSubCategories(getSubCategoriesList());


    function getCumulativeEntriesByCategory() {

        // Filter Initial Entries Data

        const entriesForYear = props.entries.filter(function(row) {
            return row.year == props.selectedYear;
        })
        const entiresByMonth = entriesForYear.filter(function(row) {
            return row.month == props.selectedMonth;
        })
        const entiresByMainCategory = entiresByMonth.filter(function(row) {
          return row.main_category.name == props.selectedMain.name;
        })        
      

        // Create new map to store cumulative amounts
        const sumByCategory = {}

        //Iterate through entries and accumulative amounts foreach day
        entiresByMainCategory.forEach((entry) => {
            const category = entry.sub_category.name;
            const value = entry.expense;

          // Initialize cumulative amount if day doesnt exist
          if (!sumByCategory[category]){
            sumByCategory[category] = 0;
          }

          sumByCategory[category] += value;
        });

        // Create Array to Output
        const summedObjects = Object.keys(sumByCategory).map((category) => ({
          category,
          sum: parseFloat(sumByCategory[category]).toFixed(0),
        }));


        // Final array (holds zero for null entry)
        const finalSumByCategory = []

        for (let i = 0; i < props.subCategories.length; i++) {
          let matchFound = false;
          for (let j = 0; j < summedObjects.length; j++) {
            if (props.subCategories[i].name === summedObjects[j].category) {
              finalSumByCategory.push(summedObjects[j].sum);
              matchFound = true;
            }
          }
          if (!matchFound)
            finalSumByCategory.push(0);
        }
        return finalSumByCategory;
    }
    setEntryData(getCumulativeEntriesByCategory());


    function getCumulativeBudgetByCategory() {
        // Filter Initial Entries Data
        console.log("budgets")

        const budgetForYear = props.budgets.filter(function(row) {
          return row.year == props.selectedYear;
        })

        const budgetByMonth = budgetForYear.filter(function(row) {
          return row.month == props.selectedMonth;
        })     

        const budgetByMainCategory = budgetByMonth.filter(function(row) {
          return row.sub_category.main_category.name == props.selectedMain.name;
        })               

        // Create new map to store cumulative amounts
        const sumByCategory = {}

        //Iterate through entries and accumulative amounts foreach day
        budgetByMainCategory.forEach((budget) => {
            const category = budget.sub_category.name;
            const value = budget.amount;

          // Initialize cumulative amount if day doesnt exist
          if (!sumByCategory[category]){
            sumByCategory[category] = 0;
          }

          sumByCategory[category] += value;
        });

        // Create Array to Output
        const summedObjects = Object.keys(sumByCategory).map((category) => ({
          category,
          sum: parseFloat(sumByCategory[category]).toFixed(0),
        }));     
        
        // Final array (holds zero for null entry)
        const finalSumByCategory = []

        for (let i = 0; i < props.subCategories.length; i++) {
          let matchFound = false;
          for (let j = 0; j < summedObjects.length; j++) {
            if (props.subCategories[i].name === summedObjects[j].category) {
              finalSumByCategory.push(summedObjects[j].sum);
              matchFound = true;
            }
          }
          if (!matchFound)
            finalSumByCategory.push(0);
        }

        return finalSumByCategory;        
    }
    setBudgetData(getCumulativeBudgetByCategory());    

    }, [props])

    const option = {
      title: {
        text: 'Sub Category Breakdown - ' + (props.selectedMain.name != undefined ? props.selectedMain.name : "No Category Selected"),
        top: '1%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Budget', 'Expenses'],
        top: '9%'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: subCategories,
          axisLabel: {
            show: true,
            interval: 0,
            rotate: 20,
          },
          axisTick: {
            show: true,
            interval: 0,
            length: -10,
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Budget',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            rotate: 90
          },
          data: budgetData
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          label: {
            show: true,
            rotate: 90
          },
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

export default DashboardSubCategoryStackedBar;