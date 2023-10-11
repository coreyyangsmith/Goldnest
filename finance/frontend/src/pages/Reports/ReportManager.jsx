//-------------------------------------------------------//
//  File Name: ReportManager.jsx
//  Description: Manager Components for Reports
//
//  Parnets:
//      - Reports.jsx
//
//  Requirements:
//      - selectedReportType (prop)
//      - selectedYear (prop)
//      - selectedMonth (prop, optional)
//
//  Returns:
//      - Renders sub-components dependant on selectedReportType
//
// Created By: Corey Yang-Smith
// Date: October 3rd, 2023
// Updated: October 11th, 2023
//-------------------------------------------------------//


//  IMPORTS 
//-------------------------------------------------------//

// React Imports
import React from 'react'

// MUI Imports
import { Box, Grid } from '@mui/material/';

// My Components
import DoughnutYearlyBudget from "./DoughnutYearlyBudget";
import DoughnutYearlyEntry from "./DoughnutYearlyEntry";
import VBarYearBudgetEntry from './VBarYearBudgetEntry';
import VBarYearBudgetEntryCategory from './VBarYearBudgetEntryCategory';
import SunburstEChartsExample from './samples/SunburstEChartsExample';
import StackedVBarEChartsExample from './samples/StackedVBarEChartsExample';
import StackedHBarEChartsExample from './samples/StackedHBarEChartsExample';
import TreechartEChartsExample from './samples/TreechartEChartsExample';
import GradientStackedEChartsExample from './samples/GradientStackedEChartsExample';
import VHeatMapEChartsExample from './samples/VHeatMapEChartsExample';
import CalendarIconEChartsExample from './samples/CalendarIconEChartsExample';
import MonthHeatMapEChartsExample from './samples/MonthHeatMapEChartsExample';

// My Hooks
import { useMainCategory } from '../../hooks/useMainCategory';
import { useEntries } from '../../hooks/useEntriesReport';
import { useBudget } from '../../hooks/useBudgetReport'

//  MAIN FUNCTION 
//-------------------------------------------------------//

const ReportManager = (props) => {
  // My Custom Hooks
  
  return (
<>
<p>report manager</p>
</>
  )
}


//  EXPORTS
//-------------------------------------------------------//

export default ReportManager