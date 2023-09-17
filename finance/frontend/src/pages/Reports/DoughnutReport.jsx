// React Import
import React, { useState, useEffect } from 'react'

// Charts JS Import
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Faker
import { faker } from '@faker-js/faker';

// Axios Import
import { getRequest } from '../../api/posts';

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



const DoughnutReport = (props) => {
  const [isReady, setIsReady] = useState(null);
  const [mainCategories, setMainCategories] = useState([]);
  const [budgetNumbers, setBudgetNumbers] = useState([]);

  const [subCategories, setSubCategories] = useState([]);

  const [myLabels, setMyLabels] = useState([]);
  const [myData, setMyData] = useState([]);
  const [myColors, setMyColors] = useState([]);

  useEffect(() => {
    const fetchMainCategories = async() => {
      try {
          const response = await getRequest('maincategories/', "");
          setMainCategories(response.data);       
      } catch (err) {
          if (err.response) {
              // Not in 200 response range
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);   
          }
          else {
              console.log(`Error: ${err.message}`);
          }                             
      }
    }

    const fetchBudgetNumbers = async() => {
      try {
          const response = await getRequest('budgets/', "");
          setBudgetNumbers(response.data);            
      } catch (err) {
          if (err.response) {
              // Not in 200 response range
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);   
          }
          else {
              console.log(`Error: ${err.message}`);
          }                             
      }
    }    

    // Get initial main categories and budget numbers from database
    fetchMainCategories();
    fetchBudgetNumbers();
    return setIsReady('true');
  }, [])

  useEffect(() => {
    // Runs once data is loaded, used to process data into correct format given the parameters
    setMyLabels(mainCategories.map(a => a.name))

    // Assume yearly
    // Process budget to sum by year, group budget numbers by main category
    const groupedBudgetByYear = budgetNumbers.filter(function(row) {
      return row.year == props.selectedYear;
    });

    const sumByMain = groupedBudgetByYear.reduce((acc, cur) => {
      acc[cur.sub_category.main_category] = acc[cur.sub_category.main_category] + cur.amount || cur.amount;
      return acc;
    }, {})

    const summedValues = Object.values(sumByMain);    
    setMyData(summedValues);

    //Based on array length, randomly generate array of rgb colors.a
    var rgb = [];

    for(var i = 0; i < myLabels.length; i++)
      rgb.push("rgb(" + Math.floor(Math.random() * 255) + "," 
                      + Math.floor(Math.random() * 255) + ","
                      + Math.floor(Math.random() * 255) + ")");
    setMyColors(rgb);

    console.log(myLabels);
    console.log(myData);
    console.log(myColors);

  }, [isReady, props])

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
    <h2>My Doughnut Report</h2>
        <Doughnut data={data} />
    </>

  )
}

export default DoughnutReport