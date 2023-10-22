//-------------------------------------------------------//
//  File Name: MonthSunburstBudget.jsx
//  Description: Sunburst Diagram for all Budget Items for SelectedYear & SelectedMonth
//
//  Requirements:
//      - Report Manager
//      - Budget (all)
//      - Main Categories
//      - Sub Categories 
//      - Selected Year (prop)
//      - Selected Month (prop)
//
//  Returns:
//      - Sunburst Chart
//
// Created By: Corey Yang-Smith
// Date: October 11th, 2023
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

const MonthSunburstBudget = (props) => {


  // My Hooks
  const [data, setData] = useState([]);


  // Load Budget Data and Partiton into Yearly Sunburst Format
  useEffect(() => {
    if (props.selectedYear !== undefined)
    {

      /**
       * Returns an Arra of the Main Category Names (String)
       * @returns mainCategoriesArray: Array of MainCategoryNames (String) 
       */
      function getMainCategoriesList() {
        const mainCategoriesArray = [];
        props.mainCategories.forEach((mainCat) => mainCategoriesArray.push(mainCat.name))
        return mainCategoriesArray;
      }
      const mainCatData = getMainCategoriesList();

      /**
       * Returns an Array of the Sub Category Names (String)
       * @returns subCategoriesArray: Array of SubCategoryNames (String)
       */
      function getSubCategoriesList() {
        const subCategoriesArray = [];
        props.subCategories.forEach((subCat) => subCategoriesArray.push(subCat.pk))
        return subCategoriesArray;
      }
      const subCatData = getSubCategoriesList();    


      /**
       * Takes in a user's entries, selectedYear, mainCategories and subCategories, and returns an enriched budgets array
       * @param {*} mainCategories Array of Main Category Names
       * @param {*} subCategories Array of Sub Cateogry Names
       * @returns mappedBudgetSub: Array of Entries (Object) enriched with "matchingMainCategoryName" and "matchingMainCategoryID"
       */      
      function getFilteredBudgets(mainCategories, subCategories) {
        const budgetForYear = props.budget.filter(function(row) {
          return row.year == props.selectedYear;
        })

        const budgetForMonth = budgetForYear.filter(function(row) {
          return row.month == props.selectedMonth;
        })      

        const mappedBudgetsMain = budgetForMonth.map(budget => {
          const matchingMainCategoryName = mainCategories.find(obj => obj === budget.sub_category.main_category.name);
          return { ...budget, matchingMainCategoryName };
        });    

        const mappedBudgetsSub = mappedBudgetsMain.map(budget => {
          const matchingSubCategoryID = subCategories.find(obj => obj === budget.sub_category.pk);
          return { ...budget, matchingSubCategoryID };
        });      
        return mappedBudgetsSub
      }        
      const mappedBudgetsSub = getFilteredBudgets(mainCatData, subCatData);

      // Filter Budget Data into appropriate format
      // Sum based on category IDs
      // mySummedSubCategories --> {id: pk (subcat), sum: int}
      function groupAndSumByAttribute(list, attribute) {
        return list.reduce((result, item) => {
          const key = item[attribute];

          if (!result[key]) {
            result[key] = {
              [attribute]: key,
              sum: 0,
            };
          }
          result[key].sum += item.amount; // Assuming each object has a 'sum' property
          result[key].name = item.sub_category.name;

          return result;
        }, {})}   
      const mySummedSubCategories = groupAndSumByAttribute(mappedBudgetsSub, 'matchingSubCategoryID');
      // Convert from one large object to array of objects
      const mySummedSubCategoriesFinal = Object.keys(mySummedSubCategories).map(key => ({ key, value: mySummedSubCategories[key]}));

      // Generate Intermediate Object to help mapping
      // myCategoryLabels --> {name: str (mainCat), fk: [pks associate with subCats]}    
      function groupByAttribute(list) {
        return list.reduce((result, object) => {
          const groupName = object.main_category.name;

          if (!result[groupName]) {
            result[groupName] = {
              name: groupName,
              children: [],
            };
          }

          result[groupName].children.push(object.pk);

          return result;
        }, {})}
      const myCategoryLabels = groupByAttribute(props.subCategories);
      // Convert from one large object to array of objects
      const myCategoryLabelsFinal = Object.keys(myCategoryLabels).map(key => ({ key, value: myCategoryLabels[key]}));


      function combineLists(list1, list2) {

        // Create a map to quickly look up list2 objects by FK
        const list2Map = new Map();

        list2.forEach((obj) => {
          list2Map.set(obj.value.matchingSubCategoryID, { name: obj.value.name, value: obj.value.sum });
        }); 
      
        // Use map to combine the two lists
        const combinedList = list1.map(obj1 => {
          const children = obj1.value.children.map(fk => {
            const obj2 = list2Map.get(fk);
            if (obj2) {
              return { name: obj2.name, value: obj2.value };
            }
            return null;
          }).filter(child => child !== null);
        
          return {
            name: obj1.value.name,
            children,
          };
        });
    
        return combinedList;
      }


      if (mySummedSubCategoriesFinal.length > 0)
      {      
        if (mySummedSubCategoriesFinal[0].key !== "undefined")
        {
          const finalData = combineLists(myCategoryLabelsFinal, mySummedSubCategoriesFinal)
          setData(finalData);
        }
      }     
    }    

  }, [props])

  const option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },       
    
    series: {
      type: 'sunburst',
      data: data,
      radius: ['0%', "97%"],
      itemStyle: {
        borderRadius: 0,
        borderWidth: 1
      },
      label: {
        color: '#000',
        textBorderColor: '#fff',
        textBorderWidth: 4,
        fontSize: 14,
        formatter: function(d) {
          return d.name + " (" + Number(d.value).toFixed(0) + ")";
        }        
      },
    }
  };  

  return (
  <Paper sx={{paddingLeft:"32px", paddingRight:"32px", paddingTop:"16px", paddingBottom:"16px"}} elevation={4}>
    <Typography variant="dashboard_heading">Monthly Budget Categories</Typography>
    <Divider/>
    <ReactEcharts option={option} style={{height:"750px"}}/>  
  </Paper>)
}


//  EXPORTS 
//-------------------------------------------------------//

export default MonthSunburstBudget