//-------------------------------------------------------//
//  File Name: MonthHeatmapEntry.jsx
//  Description: Sunburst Diagram for all Entry Items for SelectedYear & SelectedMonth
//
//  Requirements:
//      - Report Manager
//      - Entry (all)
//      - Main Categories (?)
//      - Sub Categories (?)
//
//  Returns:
//      - Sunburst Chart
//
// Created By: Corey Yang-Smith
// Date: October 20th, 2023
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

const MonthHeatmapEntry = (props) => {
	// My Hooks
	const [data, setData] = useState([]);
	const [calendarMonth, setCalendarMonth] = useState(
		props.selectedYear + '-' + props.selectedMonth.toString().padStart(2, '0')
	);
	const [maxValue, setMaxValue] = useState(10000);

	// Load Budget Data and Partiton into Monthly Heatmap Format
	useEffect(() => {
		// Regenerate Calendar Month upon useEffect Trigger
		setCalendarMonth(
			props.selectedYear + '-' + props.selectedMonth.toString().padStart(2, '0')
		);

		if (props.selectedYear !== '' && props.selectedMonth !== '') {
			/**
			 * Gets the sum of entries by each day in a month, and formats for heatmap echarts
			 * @returns Array of Objects with {Date (String) and Entry Summed Value (Float)}
			 */
			function getEntriesByDay() {
				// Filter Initial Entries Data
				const entriesForYear = props.entries.filter(function (row) {
					return row.year === props.selectedYear;
				});

				const entiresByMonth = entriesForYear.filter(function (row) {
					return row.month === parseInt(props.selectedMonth);
				});

				// Create new map to store cumulative amounts
				const entriesByDay = new Map();
				let maxVal = 0;

				//Iterate through entries and accumulative amounts foreach day
				entiresByMonth.forEach((entry) => {
					const date = new Date(entry.date);
					const day = date.getDate();
					//const month = date.getMonth();

					// Initialize amount if day doesnt exist
					if (!entriesByDay.has(day)) {
						entriesByDay.set(day, 0);
					}

					// Accumulate the amount for the day
					entriesByDay.set(
						day,
						entriesByDay.get(day) + parseFloat(entry.expense)
					);
				});

				// Create Array to Output
				const entryArray = [];

				const daysInMonth = new Date(
					props.selectedYear,
					props.selectedMonth,
					0
				).getDate();

				for (let day = 1; day <= daysInMonth; day++) {
					let date =
						props.selectedYear +
						'-' +
						props.selectedMonth.toString().padStart(2, '0') +
						'-' +
						day.toString().padStart(2, '0');

					if (maxVal < entriesByDay.get(day)) maxVal = entriesByDay.get(day);

					if (entriesByDay.get(day) !== undefined)
						entryArray.push([date, Number(entriesByDay.get(day)).toFixed(2)]);
					else entryArray.push({ Date: date, value: 0 });
				}
				setMaxValue(maxVal);

				return entryArray;
			}
			if (props.entries.length > 0) setData(getEntriesByDay());
		}
	}, [props]);

	const option = {
		tooltip: {
			position: 'top',
		},
		visualMap: {
			// slider
			min: 0,
			max: maxValue,
			orient: 'horizontal',
			bottom: '0%',
			right: '5%',
			calculable: true,
		},
		calendar: {
			orient: 'vertical',
			yearLabel: {
				margin: 40,
			},
			dayLabel: {
				firstDay: 0,
				nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			},
			monthLabel: {
				nameMap: 'cn',
				margin: 10,
			},
			cellSize: 50,
			range: calendarMonth,
			itemStyle: {
				borderWidth: 1,
			},
		},
		series: {
			type: 'heatmap',
			coordinateSystem: 'calendar',
			data: data,
		},
	};

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
				Monthly Spending Heatmap
			</Typography>
			<Divider />
			<ReactEcharts
				option={option}
				style={{ height: '350px' }}
			/>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default MonthHeatmapEntry;
