//-------------------------------------------------------//
//  File Name: YearHeatmapEntry.jsx
//  Description: Heatmap Diagram for all Entry Items for SelectedYear
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
// Date: October 25th, 2023
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

const YearHeatmapEntry = (props) => {
	// My Hooks
	const [data, setData] = useState([]);
	const [calendarYear, setCalendarYear] = useState(props.selectedYear);
	const [maxValue, setMaxValue] = useState(10000);

	// Load Budget Data and Partiton into Monthly Heatmap Format
	useEffect(() => {
		// Regenerate Calendar Month upon useEffect Trigger
		setCalendarYear(props.selectedYear);

		if (props.selectedYear !== '') {
			/**
			 * Gets the sum of entries by each day in a month, and formats for heatmap echarts
			 * @returns Array of Objects with {Date (String) and Entry Summed Value (Float)}
			 */
			function getEntriesByDay() {
				// Filter Initial Entries Data
				const entriesForYear = props.entries.filter(function (row) {
					return row.year == props.selectedYear;
				});

				// Create new map to store cumulative amounts
				const entriesByDay = new Map();
				let maxVal = 0;

				//Iterate through entries and accumulative amounts foreach day
				entriesForYear.forEach((entry) => {
					var date = new Date(entry.date);
					date =
						date.getFullYear() +
						'-' +
						(date.getMonth() + 1).toString().padStart(2, '0') +
						'-' +
						date.getDate().toString().padStart(2, '0');

					// Initialize amount if day doesnt exist
					if (!entriesByDay.has(date)) {
						entriesByDay.set(date, 0);
					}

					// Accumulate the amount for the day
					entriesByDay.set(date, entriesByDay.get(date) + entry.expense);
				});
				console.log('Entries By Day');
				console.log(entriesByDay);

				// Create Array to Output
				const entryArray = [];

				const daysinYear =
					new Date(props.selectedYear, 1, 1).getFullYear() % 4 == 0 ? 366 : 365;

				for (let day = 1; day <= daysinYear; day++) {
					let iterDate = new Date(props.selectedYear, 1, 0);
					iterDate.setDate(day);
					iterDate =
						iterDate.getFullYear() +
						'-' +
						(iterDate.getMonth() + 1).toString().padStart(2, '0') +
						'-' +
						iterDate.getDate().toString().padStart(2, '0');

					if (maxVal < entriesByDay.get(iterDate))
						maxVal = entriesByDay.get(iterDate);

					if (entriesByDay.get(iterDate) !== undefined) {
						entryArray.push([
							iterDate,
							Number(entriesByDay.get(iterDate).toFixed(2)),
						]);
					} else entryArray.push({ Date: iterDate, value: 0 });
				}
				setMaxValue(maxVal);
				console.log('Entry Array');
				console.log(entryArray);
				return entryArray;
			}
			if (props.entries.length > 0) setData(getEntriesByDay());

			console.log('--Data--');
			console.log(data);
		}
	}, [props]);

	const option = {
		tooltip: {
			position: 'top',
			formatter: (param) => {
				console.log(param);
				const makeCircle = (color) => {
					return (
						'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
						color +
						'"></span>'
					);
				};
				return makeCircle(param.color) + '$' + param.value[1].toFixed(2);
			},
		},
		visualMap: {
			// slider
			min: 0,
			max: maxValue,
			orient: 'horizontal',
			top: 'bottom',
			left: 'right',
			calculable: true,
		},
		calendar: {
			orient: 'horizontal',
			yearLabel: {
				show: false,
			},
			monthLabel: {
				margin: 10,
			},
			dayLabel: {
				firstDay: 0,
				nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			},
			cellSize: 22,
			range: calendarYear,
			itemStyle: {
				borderWidth: 1,
			},
			left: 'center',
			top: 'middle',
		},
		series: {
			type: 'heatmap',
			coordinateSystem: 'calendar',
			data: data,
			label: {
				normal: {
					show: true,
					formatter: (param) => {
						return param.value.toString().slice(8, 10);
					},
					textStyle: {
						fontSize: 8,
					},
				},
			},
		},
		title: {
			show: true,
			text: 'Expenes for ' + props.selectedYear,
			textStyle: {
				fontSize: 12,
			},
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
			style={{ alignItems: 'stretch' }}
		>
			<Typography variant="dashboard_heading">
				Yearly Spending Heatmap
			</Typography>
			<Divider />
			<ReactEcharts
				option={option}
				style={{}}
			/>
		</Paper>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default YearHeatmapEntry;
