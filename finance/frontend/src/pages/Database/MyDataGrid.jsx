// React
import { useState, useEffect } from 'react';

// MUI Dependencies
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const ENTRIES_API_URL = "http://127.0.0.1:8000/api/entrys/"

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    editable: true,
  },
  {
    field: 'routing',
    headerName: 'Company',
    type: 'number',
    width: 100,
    editable: true,
  },  
  {
    field: 'name',
    headerName: 'Item Name',
    width: 300,
    editable: true,
  },
  {
    field: 'main_category',
    headerName: 'Main Category',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },
  {
    field: 'sub_category',
    headerName: 'Sub Category',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },  
  {
    field: 'income',
    headerName: 'Income',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },  
  {
    field: 'expense',
    headerName: 'Expense',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
  },      
];

export default function MyDataGrid() {
  
  const [entries, setEntries] = useState([])

  const fetchUserData = () => {
      fetch(ENTRIES_API_URL)
          .then(response => {
              return response.json()
              })
          .then(data => {
              setEntries(data);
          })
  }
    
  useEffect(() => {
    fetchUserData()
  }, [])

  const rows = entries;


  return (
    <Box sx={{ height: 575 + 57, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.pk}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}