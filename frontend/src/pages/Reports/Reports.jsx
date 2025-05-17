//-------------------------------------------------------//
//  File Name: Reports.jsx
//  Description: Main Page for Reports
//
//  Requirements:
//      - None
//
//  Returns:
//      - Main Page for Reports
//
// Created By: Corey Yang-Smith
// Date: September 25th, 2023
// Updated: October 11th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useEffect, useState } from 'react';

// MUI Import
import { Grid } from '@mui/material/';

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useSubCategory } from '../../hooks/useSubCategoryAll';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport';

// My Components
import ReportsTopHeading from './TopHeading/ReportsTopHeading';
import ReportManager from './ReportManager';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Reports = () => {
	const [selectedReport, setSelectedReport] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [selectedMonth, setSelectedMonth] = useState('');

	const { mainCategories } = useMainCategory();
	const { subCategories, setSubCategories } = useSubCategory();
	const { entries } = useEntries();
	const { budgets } = useBudget();

	// Use Effect to Data Fetch & Update based on User Selection
	//TODO
	useEffect(() => {}, []);

	return (
		<>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
				>
					<ReportsTopHeading
						selectedMonth={selectedMonth}
						selectedYear={selectedYear}
						selectedReport={selectedReport}
						setSelectedMonth={setSelectedMonth}
						setSelectedYear={setSelectedYear}
						setSelectedReport={setSelectedReport}
					/>

					<ReportManager
						entries={entries}
						mainCategories={mainCategories}
						subCategories={subCategories}
						budget={budgets}
						selectedYear={selectedYear}
						selectedMonth={selectedMonth}
						selectedReport={selectedReport}
					/>
				</Grid>
			</Grid>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default Reports;
