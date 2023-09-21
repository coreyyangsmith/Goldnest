// React
import React, { useEffect, useState } from "react"
import useToken from "./components/useToken";

// MUI Dependencies
import { Container } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Axios
import { getRequest } from './api/posts'

// Components
import './App.css';
import SideBar from './components/SideBar';
import Login from "./pages/Login/Login";

// Context - Current User
import { AuthProvider } from "./context/AuthContext"

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

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken}/>
  }  

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <AuthProvider>
          <CssBaseline/>
            <Container>
              <SideBar/>
            </Container>       
          </AuthProvider>               
        </ThemeProvider>
    </div>
  )
}    

export default App;
