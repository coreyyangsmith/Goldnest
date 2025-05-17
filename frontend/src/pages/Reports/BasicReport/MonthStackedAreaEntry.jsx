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
import * as echarts from 'echarts/core';
//  MAIN FUNCTION
//-------------------------------------------------------//

const MonthStackedAreaEntry = (props) => {
	// My Hooks
	const [data, setData] = useState([]);
	const [legend, setLegend] = useState([]);

	/**
	 * Given a year and month, return the number of days (int) in that month.
	 * @param {*} year props.selectedYear
	 * @param {*} month props.selectedMonth
	 * @returns
	 */
	function getNumDays(year, month) {
		const date = new Date(year, month, 0);
		const numDays = date.getDate();
		return numDays;
	}
	const numDays = getNumDays(props.selectedYear, props.selectedMonth);

	/**
	 * Given num of days, will map each day to an array []
	 * @param {*} numDays (int) num of days in month
	 * @returns return an array with each day
	 */
	function mapDaysToArray(numDays) {
		const arr = [];
		for (let i = 1; i <= numDays; i++) arr.push(i);
		return arr;
	}

	/**
	 * Generated 2 random color string rgb(r,g,b) from pre-defined colors and pushes them to an array
	 * @returns returns arr of two strings wth random colors
	 */
	function generateTwoColorGradient() {
		const colors = [];

		const colorsOne = [];
		const o1 = 'rgb(' + 128 + ',' + 255 + ', ' + 165 + ')'; //blue
		const o2 = 'rgb(' + 0 + ',' + 221 + ', ' + 255 + ')'; //blue
		const o3 = 'rgb(' + 55 + ',' + 162 + ', ' + 255 + ')'; //French Violet
		const o4 = 'rgb(' + 255 + ',' + 0 + ', ' + 135 + ')'; //pink
		const o5 = 'rgb(' + 255 + ',' + 191 + ', ' + 0 + ')'; //orange
		const o6 = 'rgb(' + 34 + ',' + 193 + ', ' + 195 + ')';
		const o7 = 'rgb(' + 131 + ',' + 58 + ', ' + 180 + ')';
		const o8 = 'rgb(' + 254 + ',' + 141 + ', ' + 198 + ')'; //Persian Pink #FE8DC6
		const o9 = 'rgb(' + 127 + ',' + 0 + ', ' + 255 + ')'; //Violet #7F00FF
		const o10 = 'rgb(' + 251 + ',' + 176 + ', ' + 64 + ')'; //Hunyadi Yellow #FBB040
		const o11 = 'rgb(' + 0 + ', ' + 161 + ', ' + 255 + ')'; //Celestial Blue #00A1FF
		const o12 = 'rgb(' + 238 + ', ' + 42 + ', ' + 123 + ')'; //Rose #EE2A7B
		const o13 = 'rgb(' + 255 + ', ' + 0 + ', ' + 212 + ')'; //Hot Magenta #FF00D4
		const o14 = 'rgb(' + 239 + ', ' + 65 + ', ' + 54 + ')'; //Vermillion #EF4136
		const o15 = 'rgb(' + 45 + ', ' + 56 + ', ' + 138 + ')'; //Marian Blue #2D388A
		colorsOne.push(o1);
		colorsOne.push(o2);
		colorsOne.push(o3);
		colorsOne.push(o4);
		colorsOne.push(o5);
		colorsOne.push(o6);
		colorsOne.push(o7);
		colorsOne.push(o8);
		colorsOne.push(o9);
		colorsOne.push(o10);
		colorsOne.push(o11);
		colorsOne.push(o12);
		colorsOne.push(o13);
		colorsOne.push(o14);
		colorsOne.push(o15);

		const colorsTwo = [];
		const t1 = 'rgb(' + 1 + ', ' + 191 + ', ' + 255 + ')';
		const t2 = 'rgb(' + 77 + ', ' + 119 + ', ' + 255 + ')';
		const t3 = 'rgb(' + 116 + ', ' + 21 + ', ' + 219 + ')'; //Celestial Blue
		const t4 = 'rgb(' + 135 + ', ' + 0 + ', ' + 157 + ')';
		const t5 = 'rgb(' + 224 + ', ' + 62 + ', ' + 76 + ')';
		const t6 = 'rgb(' + 253 + ', ' + 187 + ', ' + 45 + ')';
		const t7 = 'rgb(' + 252 + ', ' + 69 + ', ' + 69 + ')'; //red
		const t8 = 'rgb(' + 254 + ', ' + 209 + ', ' + 199 + ')'; //Pale Dogwood #FED1C7
		const t9 = 'rgb(' + 225 + ', ' + 0 + ', ' + 255 + ')'; //Phlox #E100FF #F9ED32
		const t10 = 'rgb(' + 249 + ', ' + 237 + ', ' + 50 + ')'; //Aureolin #F9ED32
		const t11 = 'rgb(' + 0 + ', ' + 255 + ', ' + 143 + ')'; //Spring Green #00FF8F
		const t12 = 'rgb(' + 255 + ', ' + 125 + ', ' + 184 + ')'; //Persian Pink #FF7DB8
		const t13 = 'rgb(' + 0 + ', ' + 221 + ', ' + 255 + ')'; //Vivid Sky Blue #00DDFF
		const t14 = 'rgb(' + 251 + ', ' + 176 + ', ' + 64 + ')'; //Hunyadi Yellow #FBB040
		const t15 = 'rgb(' + 0 + ', ' + 174 + ', ' + 239 + ')'; //Picton Blue #00AEEF
		colorsTwo.push(t1);
		colorsTwo.push(t2);
		colorsTwo.push(t3);
		colorsTwo.push(t4);
		colorsTwo.push(t5);
		colorsTwo.push(t6);
		colorsTwo.push(t7);
		colorsTwo.push(t8);
		colorsTwo.push(t9);
		colorsTwo.push(t10);
		colorsTwo.push(t11);
		colorsTwo.push(t12);
		colorsTwo.push(t13);
		colorsTwo.push(t14);
		colorsTwo.push(t15);

		const length = colorsOne.length;
		const randomNum = Math.floor(Math.random() * length);

		colors.push(colorsOne[randomNum]);
		colors.push(colorsTwo[randomNum]);

		return colors;
	}

	/**
	 * Generates 2 completely random color string rgb(r,g,b) and pushes them to an array
	 * @returns returns arr of two strings with random colors
	 */
	function generateTwoRandomColorGradient() {
		const colors = [];

		var c1 = {
			r: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			b: Math.floor(Math.random() * 255),
		};

		var c2 = {
			r: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			b: Math.floor(Math.random() * 255),
		};

		const colorOne = 'rgb(' + c1.r + ', ' + c1.g + ', ' + c1.b + ')';
		const colorTwo = 'rgb(' + c2.r + ', ' + c2.g + ', ' + c2.b + ')';

		colors.push(colorOne);
		colors.push(colorTwo);

		return colors;
	}

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
					return row.year === props.selectedYear;
				});

				const entryForMonth = entryForYear.filter(function (row) {
					return row.month === parseInt(props.selectedMonth);
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
								cumulativeEntriesByDay.get(day) + parseFloat(entry.expense)
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

					for (let day = 1; day <= numDays; day++) {
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

					const myColors = generateTwoColorGradient();

					const item = {};

					const emphasis = {};
					emphasis['focus'] = 'series';

					const lineStyle = {};
					lineStyle['width'] = 0;

					const areaStyle = {};
					areaStyle['opacity'] = 0.9;
					areaStyle['color'] = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: myColors[0],
						},
						{
							offset: 1,
							color: myColors[1],
						},
					]);

					item['name'] = mainCategory;
					item['type'] = 'line';
					item['stack'] = 'total';
					item['areaStyle'] = {};
					item['emphasis'] = emphasis;
					item['data'] = data_elements;
					item['lineStyle'] = lineStyle;
					item['areaStyle'] = areaStyle;
					item['smooth'] = true;
					item['showSymbol'] = false;

					count++;
					data.push(item);
				});

				return data;
			}

			const final_data = createStackedAreaData(
				populatedArrayMap,
				mainCategoryList
			);
			setData(final_data);
		}
	}, [props]);

	// WIP, Sankey generates but for some reason the data is not valid - perhaps because of duplicates?
	let option = {};

	/**
	 * Pulls colors from data series and maps them to an array to be set in the legend
	 * @param {*} data finalData array to be ploted
	 * @returns Array of data length which has color codes rgb(r,g,b) that correspond to each series
	 */
	function getIconColors(data) {
		const colorArr = [];
		for (let i = 0; i < data.length; i++) {
			colorArr.push(data[i].areaStyle.color.colorStops[0].color);
		}
		return colorArr;
	}
	const myLegendColors = getIconColors(data);

	if (data.length > 0) {
		option = {
			color: myLegendColors,
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
				top: '2%',
				data: legend,
			},
			xAxis: [
				{
					type: 'category',
					boundaryGap: false,
					data: mapDaysToArray(numDays),
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
