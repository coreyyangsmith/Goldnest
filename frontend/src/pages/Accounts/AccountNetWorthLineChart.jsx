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
import { Box } from '@mui/material';

// Utilities
import {
	getDates,
	removeDuplicateDates,
} from '../../utils/accountUtilities.js';

//  MAIN FUNCTION
//-------------------------------------------------------//

const AccountNetWorthLineChart = (props) => {
	// Custom Hooks
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const [chequingsData, setChequingsData] = useState([]);
	const [savingsData, setSavingsData] = useState([]);
	const [investmentData, setInvestmentData] = useState([]);
	const [assetData, setAssetData] = useState([]);
	const [debtData, setDebtData] = useState([]);
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

		function getAccountData(accountEntries, accountType) {
			var data = [];
			var uniqueDates = [];

			// Get All Non-Debt Entries
			accountEntries.forEach((element) => {
				if (element.account.account_type === accountType) {
					data.push(element);
				}
			});

			// Get List of Unique Dates
			uniqueDates = removeDuplicateDates(data);

			// Get Summed Values
			let keyvals = aggregateValuesByDate(uniqueDates, data);

			let vals = Object.values(keyvals);

			return vals;
		}

		function getNWData(accountEntries) {
			var data = [];
			var uniqueDates = [];

			// Get All Non-Debt Entries
			accountEntries.forEach((element) => {
				data.push(element);
			});

			// Get List of Unique Dates
			uniqueDates = removeDuplicateDates(data);

			// Get Summed Values
			let keyvals = aggregateValuesByDate(uniqueDates, data);

			let vals = Object.values(keyvals);

			return vals;
		}

		setStartDate(getMinDate(props.accountEntries));
		setEndDate(getMaxDate(props.accountEntries));

		setChequingsData(getAccountData(props.accountEntries, 'CHQ'));
		setSavingsData(getAccountData(props.accountEntries, 'SAV'));
		setInvestmentData(getAccountData(props.accountEntries, 'INV'));
		setAssetData(getAccountData(props.accountEntries, 'AST'));
		setDebtData(getAccountData(props.accountEntries, 'DBT'));

		setNwData(getNWData(props.accountEntries));

		setDateData(getDates(props.accountEntries));

		// console.log('Chequings');
		// console.log(chequingsData);

		// console.log('Savings');
		// console.log(savingsData);

		// console.log('Investments');
		// console.log(investmentData);

		// console.log('Assets');
		// console.log(assetData);

		// console.log('Debts');
		// console.log(debtData);

		// console.log('Dates');
		// console.log(dateData);
	}, [props]);

	const option = {
		tooltip: {
			trigger: 'axis',
			valueFormatter: (value) => value,
		},
		legend: {
			data: [
				'Chequings',
				'Savings',
				'Investments',
				'Assets',
				'Debts',
				'Net Worth',
			],
			top: '-1%',
		},
		grid: {
			top: '10%',
			left: '0%',
			right: '0%',
			bottom: '0%',
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
				name: 'Chequings',
				data: chequingsData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Savings',
				data: savingsData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Investments',
				data: investmentData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Assets',
				data: assetData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Debts',
				data: debtData,
				type: 'line',
				smooth: true,
			},
			{
				name: 'Net Worth',
				data: nwData,
				type: 'line',
				smooth: true,
			},
		],
	};

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				background: 'transparent',
			}}
		>
			<ReactEcharts option={option} />
		</Box>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default AccountNetWorthLineChart;
