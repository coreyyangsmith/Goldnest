//-------------------------------------------------------//
//  File Name: MyDataGrid.jsx
//  Description: Displays Main Contact for Database
//
//  Parents:
//      - Database.jsx
//
//  Requirements:
//      - Entries Data (prop)
//
//  Returns:
//      - Data Grid with User Entries
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import { useState, useEffect } from "react";

// MUI Dependencies
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";

// My Imports
import { useEntries } from "../../hooks/useEntries.js";

//  GLOBALS & INITIALIZATION
//-------------------------------------------------------//

//  MAIN FUNCTION
//-------------------------------------------------------//

export default function MyDataGrid(props) {
  // Custom Hooks
  const { processData } = useEntries();

  // Initial Data Fetch

  // Assign Data
  const rows = props.entries;

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 125,
      editable: true,
    },
    {
      field: "routing",
      headerName: "Company",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "name",
      headerName: "Item Name",
      width: 300,
      editable: true,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          {" "}
          {/* TODO - Pull notes attribute to populate toolip */}
          <span className="table-cell-trucate">{params.value.toString()}</span>
        </Tooltip>
      ),
    },
    {
      field: "main_category",
      headerName: "Main Category",
      description: "This column has a value getter and is not sortable.",
      width: 175,
    },
    {
      field: "sub_category",
      headerName: "Sub Category",
      description: "This column has a value getter and is not sortable.",
      width: 175,
    },
    {
      field: "income",
      headerName: "Income",
      description: "This column has a value getter and is not sortable.",
      width: 125,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "$0.00";
        }
        return `$${params.value.toLocaleString()}`;
      },
    },
    {
      field: "expense",
      headerName: "Expense",
      description: "This column has a value getter and is not sortable.",
      width: 125,
      valueFormatter: (params) => {
        if (params.value == null) {
          return "$0.00";
        }
        return `$${params.value.toLocaleString()}`;
      },
    },
  ];

  return (
    <Box sx={{ height: 575 + 57, width: "100%" }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.pk}
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
