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

//  MAIN FUNCTION
//-------------------------------------------------------//

const AccountNetWorthLineChart = (props) => {
	// Custom Hooks
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const [assetData, setAssetData] = useState([]);
	const [debtData, setDebtData] = useState([]);
	const [nwData, setNwData] = useState([]);

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

		function getAssetData(accountEntries) {
			var assets = [];

			accountEntries.forEach((element) => {
				if (element.account.account_type !== 'DBT') {
					assets.push(element);
				}
			});
			console.log('Assets');
			console.log(assets);

			// get list of unique DATES from above
			// Map sums of each date to above k:v pairs
			return assets;
		}

		function getDebtData(accountEntries) {
			var debts = [];

			accountEntries.forEach((element) => {
				if (element.account.account_type === 'DBT') {
					debts.push(element);
				}
			});
			console.log('Debts');
			console.log(debts);
		}

		function getNwData(accountEntries) {}

		setStartDate(getMinDate(props.accountEntries));
		setEndDate(getMaxDate(props.accountEntries));
		setAssetData(getAssetData(props.accountEntries));
		setDebtData(getDebtData(props.accountEntries));
	}, [props]);

	const option = {
		title: {
			text: 'All Categories',
			top: '1%',
			textStyle: {
				fontSize: 12,
			},
		},
		tooltip: {
			trigger: 'axis',
			valueFormatter: (value) => value,
		},
		legend: {
			data: ['Budget', 'Expenses'],
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
			data: 0,
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				name: 'Budget',
				type: 'line',
				stack: 'x',
				data: 0,
			},
			{
				name: 'Expenses',
				type: 'line',
				stack: 'y',
				data: 0,
			},
		],
	};

	return (
		<>
			<ReactEcharts option={option} />
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountNetWorthLineChart;
