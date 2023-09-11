// React
import { useState, useEffect } from 'react';

// MUI Dependencies
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// Axios Import
import axios from "axios"

const ENTRIES_API_URL = "http://127.0.0.1:8000/api/entrys/"

const MAIN_CATEGORY_API = "http://127.0.0.1:8000/api/maincategories/"
const SUB_CATEGORY_API = "http://127.0.0.1:8000/api/subcategories/"
const ROUTING_API = "http://127.0.0.1:8000/api/entitys/"

let mainCat = await axios.get(MAIN_CATEGORY_API);
let subCat = await axios.get(SUB_CATEGORY_API);
let routing = await axios.get(ROUTING_API);

mainCat = mainCat.data
subCat = subCat.data
routing = routing.data

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    width: 125,
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
    valueFormatter: (params) => {
      if (params.value == null) {
        return '$0.00';
      }
      return `$${params.value.toLocaleString()}`;
    },    
  },  
  {
    field: 'expense',
    headerName: 'Expense',
    description: 'This column has a value getter and is not sortable.',
    width: 150,
    valueFormatter: (params) => {
      if (params.value == null) {
        return '$0.00';
      }
      return `$${params.value.toLocaleString()}`;
    },        
  },      
];

export default function MyDataGrid() {
  
  // Initial Data Fetch
  const [entries, setEntries] = useState([])

  const fetchUserData = () => {
      fetch(ENTRIES_API_URL)
          .then(response => {
              return response.json()
              })
          .then(data => {
            const nextEntries = data.map((data) => {
              return {
                id: data.pk,
                date: data.date,
                name: data.name,
                routing: data.routing.name,
                notes: data.notes,
                main_category: data.main_category.name,
                sub_category: data.sub_category.name,
                income: data.income,
                expense: data.expense,
                created_at: data.created_at,
                updated_at: data.updated_at
              }})
              setEntries(nextEntries);
          })
  }

  useEffect(() => {
    fetchUserData();
    }, [])

  //Process Data




  // Assign Data
  const rows = entries;

  return (
    <Box sx={{ height: 575 + 57, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.id}
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