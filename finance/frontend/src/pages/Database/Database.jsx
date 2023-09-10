// Component Imports
import { Container } from '@mui/material';
import MyDataGrid from './MyDataGrid';
import AddNewForm from './AddNewForm';

const Database = () => {
    return <>
    <Container>
    <h2>Welcome to My Database</h2>
    <MyDataGrid/>  
    <h2>Add New Item</h2>
    <AddNewForm/>
    </Container>
  

    </>
}

export default Database;