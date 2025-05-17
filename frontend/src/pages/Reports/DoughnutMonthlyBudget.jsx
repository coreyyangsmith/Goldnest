//-------------------------------------------------------//
//  File Name: TODO.jsx
//  Description: Generates Charts.js Doughnut Report given Entry data.
//
//  Parents:
//      - Reports.jsx
//
//  Requirements:
//      - Input Data (Entry)
//
//  Returns:
//      - Doughnut Report (given data)
//
// Created By: Corey Yang-Smith
// Date: October 3rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState, useEffect } from 'react'


// Charts JS Import
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Faker
import { faker } from '@faker-js/faker';


//  GLOBALS & INITIALIZATION 
//-------------------------------------------------------//

// Dummy Data
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [faker.number.int({ min: 0, max: 1000 }), 
          faker.number.int({ min: 0, max: 1000 }), 
          faker.number.int({ min: 0, max: 1000 })],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const DoughnutYearlyTest = (props) => {
  const [myLabels, setMyLabels] = useState([]);
  const [myData, setMyData] = useState([]);
  const [myColors, setMyColors] = useState([]);

  useEffect(() => {
    // Runs once data is loaded, used to process data into correct format given the parameters

    setMyLabels(props.mainCategories.map(a => a.name))

    // Assume yearly
    // Process budget to sum by year, group budget numbers by main category
      const groupedByYear = props.entries.filter(function(row) {
        return row.year == props.selectedYear;
      });

      const sumByMain = groupedByYear.reduce((acc, cur) => {
        acc[cur.sub_category.main_category.name] = acc[cur.sub_category.main_category.name] + cur.expense || cur.expense;
        return acc;
      }, {})

      const summedValues = Object.values(sumByMain);    
      setMyData(summedValues);

      //Based on array length, randomly generate array of rgb colors.
      var rgb = [];

      for(var i = 0; i < myLabels.length; i++)
        rgb.push("rgb(" + Math.floor(Math.random() * 255) + "," 
                        + Math.floor(Math.random() * 255) + ","
                        + Math.floor(Math.random() * 255) + ")");
      setMyColors(rgb);
  }, [props])

  const data = {
    labels: myLabels,
    datasets: [{
      label: 'Yearly Budget Numbers by Main Category',
      data: myData,
      backgroundColor: myColors,
      hoverOffset: 4
    }]
  };  

  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <>
    <h5>Yearly Spending</h5>
        <Doughnut data={data} />
    </>

  )
}


//  EXPORTS
//-------------------------------------------------------//

export default DoughnutYearlyTest