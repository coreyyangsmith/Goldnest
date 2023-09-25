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


//  MAIN FUNCTION
//-------------------------------------------------------//

const Database = () => {
    return 
    <>
        <h2>Welcome to My Database</h2>
        <MyDataGrid/>  
        <h2>Add New Item</h2>
        <AddNewForm/>
    </>
}


//  EXPORTS
//-------------------------------------------------------//

export default Database;