//-------------------------------------------------------//
//  File Name: ExpensesByMainCategory.jsx
//  Description: Generates Charts.js Line Chart given data.
//
//  Parents:
//      - Reports.jsx
//
//  Requirements:
//      - Input Data
//
//  Returns:
//      - Line Chart (given data)
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react'

// Charts JS Import
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

import { Bar } from 'react-chartjs-2';


//  UTILITY
//-------------------------------------------------------//

//Import Data


const labels = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 'September', 
                'October', 'November', 'December'];

function monthName(mon) {
   return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];
}


//  MAIN FUNCTION
//-------------------------------------------------------//

const ExpensesByMainCategory = (props) => {

  // Hooks
  const [myBudgetData, setMyBudgetData] = useState([]);
  const [myEntryData, setMyEntryData] = useState([]);

  useEffect(() => {
    // Sum all by Month
    const budgetByYear = props.budgets.filter(function(row) {
      return row.year === props.selectedYear;
    });

    const budgetByMonth = budgetByYear.reduce((acc, cur) => {
      acc[monthName(cur.month)] = acc[monthName(cur.month)] + cur.amount || cur.amount;
      return acc;
    }, {})

    // Sum all by Month
    const entryByYear = props.entries.filter(function(row) {
      return row.year === props.selectedYear;
    });

    const entryByMonth = entryByYear.reduce((acc, cur) => {
      acc[monthName(cur.month)] = acc[monthName(cur.month)] + cur.expense || cur.expense;
      return acc;
    }, {})    

    console.log(entryByMonth);
    setMyBudgetData(budgetByMonth)
    setMyEntryData(entryByMonth)    
  },[props])

  const data = {
    labels,
    datasets: [
      {
        label: 'Budget',
        data: myBudgetData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Entry',
        data: myEntryData,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };  


  ChartJS.register(CategoryScale, LinearScale, BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  return <Bar data={data}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default ExpensesByMainCategory