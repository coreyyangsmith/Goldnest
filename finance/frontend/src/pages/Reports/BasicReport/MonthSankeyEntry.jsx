//-------------------------------------------------------//
//  File Name: MonthSankeyEntry.jsx
//  Description: Sankey Diagram for all Budget Items for SelectedYear
//
//  Requirements:
//      - Report Manager
//      - Entry (all)
//      - Main Categories (all)
//      - Sub Categories (all)
//
//  Returns:
//      - Sankey Diagram
//
// Created By: Corey Yang-Smith
// Date: October 20th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react'

// MUI Import
import { Divider, Paper, Typography } from '@mui/material'

// ECharts
import ReactEcharts from "echarts-for-react";

//  MAIN FUNCTION
//-------------------------------------------------------//

const MonthSankeyEntry = (props) => {


  // My Hooks
  const [data, setData] = useState([]);

  // Load Budget Data and Partiton into Yearly Sunburst Format
  useEffect(() => {
    if (props.selectedYear !== "" && props.selectedMonth !== "")
    {
      /**
       * Returns an Array of Objects containing enriched Budget Data
       * @returns enrichedBudget: Array of Budge Objects, enriched with matchingMainCategory (obj) and matchingSubCategory (obj)
       */
      function enrichEntryData() {
        // Filters all budget objects for selected year
        const entryForYear = props.entries.filter(function(row) {
          return row.year == props.selectedYear;
        })

        const entryForMonth = entryForYear.filter(function(row) {
          return row.month == props.selectedMonth;
        })        

        // Finds matching Main Category and appends to Budget Object
        const mappedEntriesMain = entryForMonth.map(entry => {
          const matchingMainCategory = props.mainCategories.find(obj => obj.name === entry.sub_category.main_category.name);
          return { ...entry, matchingMainCategory }
        })

        // Finds matching Sub Category and appends to Budget Object        
        const mappedEntriesSub = mappedEntriesMain.map(entry => {
          const matchingSubCategory = props.subCategories.find(obj => obj.pk === entry.sub_category.pk);
          return { ...entry, matchingSubCategory };
        })
        
        const enrichedEntries = mappedEntriesSub;
        return enrichedEntries;
      };
      const enrichedEntryData = enrichEntryData();

      /**
       * Compares MainCategories and our enrichedEntryData, and returns a new object containing our Main Category Name (String), and its total sum value (Int)
       * @param {*} enrichedEntryData Enriched Budget Data containing matchingMainCategory
       * @returns resultsArray: Array of Objects containing Main Category Name (String) and its respective summed value (Int)
       */
      function enrichMainCategoryData(enrichedEntryData) {
        const resultsArray = [];
        for (const obj of props.mainCategories) {
          // Get Matching Name
          const matchingId = obj.id;
        
          // Find all matching objects in the other array
          const matchingObjects = enrichedEntryData.filter((obj) => obj.matchingMainCategory.id === matchingId);
          
          if (matchingObjects.length > 0) {
            // If matching objects are found, accumulate the additional values
            const sum = matchingObjects.reduce((acc, obj) => acc + obj.expense, 0);
            // Create a new object with the accumulated sum and the name
            resultsArray.push({ source: "DUMMY", target: obj.name, value: sum });
          }    
        }
        return resultsArray;
      };
      const mainCatData = enrichMainCategoryData(enrichedEntryData);   

      /**
       * Compares SubCategories and our enrichedEntryData, and returns a new object containing our Sub Category Name (String), and its total sum value (Int)
       * @param {*} enrichedEntryData Enriched Budget Data containing matchingSubcategory
       * @returns resultsArray: Array of Objects containing Sub Category Name (String), its Parent (Main Category) Name (String), and its respective summed value (Int)
       */
      function enrichSubCategoryData(enrichedEntryData) {
        const resultsArray = [];
        for (const obj of props.subCategories) {
          // Get Matching Name
          const matchingId = obj.pk;
        
          // Find all matching objects in the other array
          const matchingObjects = enrichedEntryData.filter((obj) => obj.matchingSubCategory.pk === matchingId);
          
          if (matchingObjects.length > 0) {
            // If matching objects are found, accumulate the additional values
            const sum = matchingObjects.reduce((acc, obj) => acc + obj.expense, 0);
            // Create a new object with the accumulated sum and the name
            resultsArray.push({ source: obj.main_category.name, target: obj.main_category.name + "-" + obj.name, value: sum });
          }    
        }
        return resultsArray;
      }
      const subCatData = enrichSubCategoryData(enrichedEntryData);  
      
      // ------------------- REFACTOR LATER ------------------- //
      // Below, since we do not yet have INCOME set up, we will create some dummy info to populate our Sankey
      // Once our BUDGET/EXPENSE categories are adjusted, we will have to refactor this part of the code.

      const myData = []

      /**
       * TODO
       * @param {*} mainCategoryData 
       * @param {*} subCategoryData 
       * @returns 
       */
      function generateNodes(mainCategoryData, subCategoryData) {
        const myNodes = []

        // DUMMY DATA
        myNodes.push({"name":"DUMMY"})
        
        // Push all Main Category Names as Nodes
        mainCategoryData.forEach((obj) => {
          if (obj.value != 0)
            myNodes.push({"name":obj.target});
        })

        // Push all Sub Category Names as Nodes        
        subCategoryData.forEach((obj) => {
          if (obj.value != 0)
            myNodes.push({"name":obj.target});
        })                                           

        return myNodes
      }

      /**
       * TODO
       * @param {*} mainCategoryData 
       * @param {*} subCategoryData 
       * @returns 
       */
      function generateLinks(mainCategoryData, subCategoryData) {
        const myLinks = []

        // Push all Main Category Links      
        mainCategoryData.forEach((obj) => {
          myLinks.push(obj);
        });

        // Push all Sub Category Links      
        subCategoryData.forEach((obj) => {
          myLinks.push(obj);
        });        

        const links = myLinks.filter((item) => item.value !== 0);
        const filteredLinks = links.filter((item) => item.source === "DUMMY");        
        return links
      }

      myData.push({"nodes": generateNodes(mainCatData, subCatData)});
      myData.push({"links": generateLinks(mainCatData, subCatData)});   
      

      setData(myData);    

    }
}, [props])


// WIP, Sankey generates but for some reason the data is not valid - perhaps because of duplicates?
let option = {}

if (data.length > 0)
{
  option = {      
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },    
    series: {
      type: 'sankey',
      data: data[0].nodes,
      links: data[1].links,      
      emphasis: {
        focus: 'adjacency'
      },
      nodeAlign: 'left',
      lineStyle: {
        color: 'gradient',
        curveness: 0.5
      }
    }
  };   
} 

  return (
  <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
    <Typography variant="dashboard_heading">Monthly Entries - Sankey Diagram</Typography>
    <Divider/>
    <ReactEcharts option={option} style={{height:"500px"}}/>  
  </Paper>)
}


//  EXPORTS 
//-------------------------------------------------------//

export default MonthSankeyEntry