// React Import
import React from 'react'

// Charts JS Import
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Faker
import { faker } from '@faker-js/faker';

// Import Data
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [faker.datatype.number({ min: 0, max: 1000 }), 
            faker.datatype.number({ min: 0, max: 1000 }), 
            faker.datatype.number({ min: 0, max: 1000 })],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

const DoughnutReport = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <>
    <h2>My Doughnut Report</h2>
        <Doughnut data={data} />
    </>

  )
}

export default DoughnutReport