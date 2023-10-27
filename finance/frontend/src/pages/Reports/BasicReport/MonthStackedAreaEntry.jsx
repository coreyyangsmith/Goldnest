//-------------------------------------------------------//
//  File Name: MonthStackedAreaEntry.jsx
//  Description: Sankey Diagram for all Budget Items for SelectedYear
//
//  Requirements:
//      - Report Manager
//      - Budget (all)
//      - Main Categories (all)
//      - Sub Categories (all)
//
//  Returns:
//      - Sankey Diagram
//
// Created By: Corey Yang-Smith
// Date: October 26th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react';

// MUI Import
import { Divider, Paper, Typography } from '@mui/material';

// ECharts
import ReactEcharts from 'echarts-for-react';

//  MAIN FUNCTION
//-------------------------------------------------------//

// TODO
{
	/* 
Desired Data Format
Data = List of Objects
Each Object
{ 
  Name: "Main Category",
  Type: 'line',
  stack: 'total',
  areaStyle: {},
  emphasis: {
    focus: 'series'
  },
  data: [values]
},

*/
}

const MonthStackedAreaEntry = (props) => {
	// My Hooks
	const [data, setData] = useState([]);
	const [legend, setLegend] = useState([]);

	// Load Budget Data and Partiton into Yearly Sunburst Format
	useEffect(() => {
		if (props.selectedYear !== '' && props.selectedMonth !== '') {
			/**
			 * getMainCategoryList: parses user's MainCategories and returns a list of names.
			 */
			function getMainCategoryList() {
				const mainCatList = [];

				props.mainCategories.forEach((mainCat) => {
					mainCatList.push(mainCat.name);
				});

				return mainCatList;
			}
			const mainCategoryList = getMainCategoryList();
			setLegend(mainCategoryList);

			/**
			 * Returns an Array of Array of Objects containing Entry Data split by Main Cateogory
			 * @returns entrichedEntry: Array of Array of Entry Objects, split by Main Category
			 */
			function splitEntriesByCategory() {
				// Filters all budget objects for selected year
				const entryForYear = props.entries.filter(function (row) {
					return row.year == props.selectedYear;
				});

				const entryForMonth = entryForYear.filter(function (row) {
					return row.month == props.selectedMonth;
				});

				// Divide each entry into a sub_array organized by category
				const resultsArray = [];
				for (const obj of props.mainCategories) {
					// Get Matching Name
					const matchingId = obj.id;

					// Find all matching objects in the other array
					const matchingObjects = entryForMonth.filter(
						(obj) => obj.main_category.id === matchingId
					);

					// Create a new object with the accumulated sum and the name
					resultsArray.push([matchingObjects]);
				}
				return resultsArray;
			}
			const splitEntryData = splitEntriesByCategory();
			console.log('Split Entry Data');
			console.log(splitEntryData);

			const entriesToUse = splitEntryData;

			// ------------------- REFACTOR LATER ------------------- //
			// Below, since we do not yet have INCOME set up, we will create some dummy info to populate our Sankey
			// Once our BUDGET/EXPENSE categories are adjusted, we will have to refactor this part of the code.

			/**
			 * Takes in an Array of Arrays of Objects (Entries), that are split by category. Processes these and maps them to days
			 * @param {*} entriesToUse
			 * @returns Array of Mapped Entries by Cateogyr
			 */
			function mapEntriesToCategoriesByDay(entriesToUse) {
				// Create new map to store cumulative amounts
				const cumulativeEntriesByDayByCategory = [];

				// For Each Sub-Array, create a new map and map the entries in the sub-array
				entriesToUse.forEach((mainCategoryArray) => {
					mainCategoryArray.forEach((mainCategory) => {
						const cumulativeEntriesByDay = new Map();
						mainCategory.forEach((entry) => {
							const date = new Date(entry.date);
							const day = date.getDate();

							// Initialize cumulative amount if day doesnt exist
							if (!cumulativeEntriesByDay.has(day)) {
								cumulativeEntriesByDay.set(day, 0);
							}

							// Accumulative the amount for the day
							cumulativeEntriesByDay.set(
								day,
								cumulativeEntriesByDay.get(day) + entry.expense
							);
						});
						cumulativeEntriesByDayByCategory.push(cumulativeEntriesByDay);
					});
				});

				return cumulativeEntriesByDayByCategory;
			}
			const mappedEntries = mapEntriesToCategoriesByDay(entriesToUse);

			/**
			 * populateMissingDays: takes in an array of mapped entries fills in the missing days with the cumulative sum.
			 * @param {*} mappedEntries
			 * @returns Array of Array, where each element is the cumulative sub for the respective main category
			 */
			function populateMissingDays(mappedEntries) {
				const populatedArray = [];

				mappedEntries.forEach((category) => {
					const categoryArray = [];

					let cumulativeSum = 0;

					for (let day = 1; day <= 31; day++) {
						if (category.has(day)) {
							cumulativeSum += category.get(day);
						}

						const value = Number(
							Math.round(parseFloat(cumulativeSum + 'e' + 2)) + 'e-' + 2
						).toFixed(2);
						categoryArray.push(value);
					}
					populatedArray.push(categoryArray);
				});

				return populatedArray;
			}
			const populatedArrayMap = populateMissingDays(mappedEntries);

			/**
			 * Takes in the array of array data and formats to the expected output for the Stacked Area ECharts chart.
			 * @param {*} populatedArray
			 * @param {*} mainCategoriesList
			 */
			function createStackedAreaData(populatedArray, mainCategoriesList) {
				const data = [];
				let count = 0;

				mainCategoriesList.forEach((mainCategory) => {
					const data_elements = [];

					populatedArray[count].forEach((element) => {
						data_elements.push(Number(element));
					});

					const item = {};

					const emphasis = {};
					emphasis['focus'] = 'series';

					item['name'] = mainCategory;
					item['type'] = 'line';
					item['stack'] = 'total';
					item['areaStyle'] = {};
					item['emphasis'] = emphasis;
					item['data'] = data_elements;
					count++;
					data.push(item);
				});

				return data;
			}

			const final_data = createStackedAreaData(
				populatedArrayMap,
				mainCategoryList
			);
			console.log('final data');
			console.log(final_data);
			setData(final_data);
		}
	}, [props]);

	// WIP, Sankey generates but for some reason the data is not valid - perhaps because of duplicates?
	let option = {};

	if (data.length > 0) {
		option = {
			title: {
				text: 'Gradient Stacked Area Chart - Monthly',
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985',
					},
				},
			},
			legend: {
				data: legend,
			},
			xAxis: [
				{
					type: 'category',
					boundaryGap: false,
					data: [
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
						'17',
						'18',
						'19',
						'20',
						'21',
						'22',
						'23',
						'24',
						'25',
						'26',
						'27',
						'28',
						'29',
						'30',
						'31',
					],
				},
			],
			yAxis: [
				{
					type: 'value',
				},
			],

			series: data,
		};
	}

	return (
		<Paper
			sx={{
				paddingLeft: '32px',
				paddingRight: '32px',
				paddingTop: '16px',
				paddingBottom: '16px',
			}}
			elevation={4}
		>
			<Typography variant="dashboard_heading">
				Monthly Spending - Stacked Area Chart
			</Typography>
			<Divider />
			<ReactEcharts
				option={option}
				style={{ height: '500px' }}
			/>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default MonthStackedAreaEntry;
