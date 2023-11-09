//-------------------------------------------------------//
//  File Name: Database.jsx
//  Description: Main Container for DataGrid for User Entries
//
//  Requirements:
//      - MainPage (?)
//
//  Returns:
//      - Main Container for Database
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// MUI Imports
import { Container, Grid } from '@mui/material';
import MyDataGrid from './MyDataGrid';
import AddNewForm from './AddNewForm';

// Custom Hooks
import { useEntries } from '../../hooks/useEntries.js';

import SortingTable from './SortingTable.jsx';
import GlobalFilteringTable from './GlobalFilteringTable.jsx';
import ColumnFilteringTable from './ColumnFilteringTable.jsx';
import PaginationTable from './PaginationTable.jsx';
import SelectingRowTable from './SelectingRowTable.jsx';
import MyTable from './MyTable.jsx';

//  MAIN FUNCTION
//-------------------------------------------------------//

const Database = () => {
	const { entries, setEntries, processData } = useEntries();

	return (
		<>
			<h2>Welcome to My Database</h2>
			<MyTable />
			<Container>
				<AddNewForm
					setEntries={setEntries}
					processData={processData}
				/>
			</Container>
		</>
	);
};

//  EXPORTS
//-------------------------------------------------------//

export default Database;

{
	/* 
<MyDataGrid entries={entries} />
*/
}
