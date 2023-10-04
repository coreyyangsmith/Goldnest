//-------------------------------------------------------//
//  File Name: TODO.jsx
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
import React from 'react'

// Charts JS Import
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


//  UTILITY
//-------------------------------------------------------//

//Import Data
// TODO
// ...

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'My Test Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

//  MAIN FUNCTION
//-------------------------------------------------------//

const ExpensesByMainCategory = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  return <Bar options={options} data={data}/>
}


//  EXPORTS 
//-------------------------------------------------------//

export default ExpensesByMainCategory