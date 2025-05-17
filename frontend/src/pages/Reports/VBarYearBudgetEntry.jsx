//-------------------------------------------------------//
//  File Name: VBarYearBudgetEntry.jsx
//  Description: Generates Charts.js VBar Chart given yearly budget & entry data.
//
//  Parents:
//      - ReportManager.jsx
//
//  Requirements:
//      - Input Data (Budget & Entry)
//
//  Returns:
//      - VBar Chart
//
// Created By: Corey Yang-Smith
// Date: October 4th 2023
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

const labels = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 'September', 
                'October', 'November', 'December'];

function monthName(mon) {
   return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon - 1];
}


//  MAIN FUNCTION
//-------------------------------------------------------//

const VBarYearBudgetEntry = (props) => {

  // Hooks
  const [myBudgetData, setMyBudgetData] = useState([]);
  const [myEntryData, setMyEntryData] = useState([]);

  useEffect(() => {
    // Sum all by Month
    const budgetByYear = props.budgets.filter(function(row) {
      return row.year == props.selectedYear;
    });

    const budgetByMonth = budgetByYear.reduce((acc, cur) => {
      acc[monthName(cur.month)] = acc[monthName(cur.month)] + cur.amount || cur.amount;
      return acc;
    }, {})

    // Sum all by Month
    const entryByYear = props.entries.filter(function(row) {
      return row.year == props.selectedYear;
    });

    const entryByMonth = entryByYear.reduce((acc, cur) => {
      acc[monthName(cur.month)] = acc[monthName(cur.month)] + cur.expense || cur.expense;
      return acc;
    }, {})    

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
  
  return (
  <>
  <h5>Yearly Budget Comparison</h5>
  <Bar data={data}/>  
  </>
  )
}


//  EXPORTS 
//-------------------------------------------------------//

export default VBarYearBudgetEntry