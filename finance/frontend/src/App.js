// React
import React, { useEffect, useState, createContext } from "react"
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

// Current User
export const UserContext = createContext();

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
  const [user, setUser] = useState("");
  const { token, setToken } = useToken();

  useEffect(() => {
    const fetchCurrentUser = async() => {
      try {
          const response = await getRequest('users/current/', {
            params: {
              token: token
            }
          })
          setUser(response.data.username);         
      } catch (err) {
          if (err.response) {
              // Not in 200 response range
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);   
          }
          else {
              console.log(`Error: ${err.message}`);
          }
          setUser("");                             
      }
  }
  fetchCurrentUser();
  }, [])

  if (!token) {
    return <Login setToken={setToken}/>
  }  

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
            <Container>
              <SideBar/>
            </Container>          
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  )
}    

export default App;
