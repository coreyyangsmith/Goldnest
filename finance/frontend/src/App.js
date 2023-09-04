// React
import React, { useEffect, useState } from "react"

// MUI Dependencies
import { Container } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Axios
import axios from "axios";

// Components
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

// Theme Definition
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffa000',
    },
    secondary: {
      main: '#40c4ff',
    },
  },
  typography: {
    fontFamily: [
      'inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },  
});


const entityItems = [
  {
    "pk": 1,
    "name": "Steam",
    "created_at": "2023-09-03T18:02:06.450637Z",
    "updated_at": "2023-09-03T18:02:06.451033Z"
},
{
    "pk": 2,
    "name": "EB Games",
    "created_at": "2023-09-03T18:02:06.451590Z",
    "updated_at": "2023-09-03T18:02:06.451906Z"
}];

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>


          <Container>

            <SideBar/>
            <NavBar/>
            <main>This app is using the dark mode</main>
          </Container>

          
      </ThemeProvider>
    </div>
  )
}    

export default App;
