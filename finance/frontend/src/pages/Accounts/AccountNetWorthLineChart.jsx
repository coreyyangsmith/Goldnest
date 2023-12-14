//-------------------------------------------------------//
//  File Name: AccountNetWorthLineChart.jsx
//  Description: Display Net Worth with selected parameters.
//
//  Requirements:
//      - Accounts.jsx
//
//  Returns:
//      -  ECharts Line Chart
//
// Created By: Corey Yang-Smith
// Date: December 10th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react';

// ECharts
import ReactEcharts from 'echarts-for-react';
import { Box, Paper } from '@mui/material';

//  MAIN FUNCTION
//-------------------------------------------------------//

const AccountNetWorthLineChart = (props) => {
	// Custom Hooks
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const [assetData, setAssetData] = useState([]);
	const [debtData, setDebtData] = useState([]);
	const [investmentData, setInvestmentData] = useState([]);
	const [nwData, setNwData] = useState([]);

	const [dateData, setDateData] = useState([]);

	// Process budget and entries into appropriate datasets based on selected year and month
	useEffect(() => {
		function getMinDate(accountEntries) {
			var minDate = new Date();
			for (let i = 0; i < accountEntries.length; i++) {
				var selectedDate = new Date(accountEntries[i].date);
				if (minDate > selectedDate) {
					minDate = selectedDate;
				}
			}
			return minDate;
		}

		function getMaxDate(accountEntries) {
			var maxDate = startDate;
			for (let i = 0; i < accountEntries.length; i++) {
				var selectedDate = new Date(accountEntries[i].date);
				if (maxDate < selectedDate) {
					maxDate = selectedDate;
				}
			}
			return maxDate;
		}

		function removeDuplicateDates(arr) {
			let unique = [];
			arr.forEach((element) => {
				if (!unique.includes(element.date)) {
					unique.push(element.date);
				}
			});
			return unique;
		}

		function aggregateValuesByDate(datesArr, valsArr) {
			const sumByDate = {};

			valsArr.forEach((obj) => {
				const { date, balance } = obj;

				if (datesArr.includes(date)) {
					if (!sumByDate[date])
						sumByDate[date] = Number(parseFloat(balance).toFixed(2));
					else sumByDate[date] += Number(parseFloat(balance).toFixed(2));
				}
			});
			return sumByDate;
		}

		function getAssetData(accountEntries) {
			var assets = [];
			var uniqueDates = [];

			// Get All Non-Debt Entries
			accountEntries.forEach((element) => {
				if (
					element.account.account_type === 'CHQ' ||
					element.account.account_type === 'SAV'
				) {
					assets.push(element);
				}
			});

			// Get List of Unique Dates
			uniqueDates = removeDuplicateDates(assets);

			// Get Summed Values
			let keyvals = aggregateValuesByDate(uniqueDates, assets);

			let vals = Object.values(keyvals);

			return vals;
		}

		function getDebtData(accountEntries) {
			var debts = [];
			var uniqueDates = [];

			accountEntries.forEach((element) => {
				if (element.account.account_type === 'DBT') {
					debts.push(element);
				}
			});

			// Get List of Unique Dates
			uniqueDates = removeDuplicateDates(debts);

			// Get Summed Values
			let vals = aggregateValuesByDate(uniqueDates, debts);

			return vals;
		}

		function getNwData(accountEntries) {}

		function getDates(accountEntries) {
			// Get List of Unique Dates
			var uniqueDates;
			uniqueDates = removeDuplicateDates(accountEntries);
			return uniqueDates;
		}

		setStartDate(getMinDate(props.accountEntries));
		setEndDate(getMaxDate(props.accountEntries));

		setAssetData(getAssetData(props.accountEntries));
		setDebtData(getDebtData(props.accountEntries));

		setDateData(getDates(props.accountEntries));

		console.log('Assets');
		console.log(assetData);

		console.log('Debts');
		console.log(debtData);

		console.log('Dates');
		console.log(dateData);
	}, [props]);

	const option = {
		tooltip: {
			trigger: 'axis',
			valueFormatter: (value) => value,
		},
		legend: {
			data: ['Assets', 'Investments', 'Debts', 'Net Worth'],
			top: '9%',
		},
		grid: {
			top: '20%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},

		xAxis: {
			type: 'category',
			data: dateData,
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				name: 'Assets',
				data: assetData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Investments',
				data: assetData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Debts',
				data: assetData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Net Worth',
				data: assetData,
				type: 'line',
				smooth: true,
			},
		],
	};

	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<ReactEcharts option={option} />
		</Box>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountNetWorthLineChart;
