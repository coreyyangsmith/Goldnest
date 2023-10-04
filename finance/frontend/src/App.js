// React
import React from "react"
import useToken from "./hooks/useToken";

// MUI Dependencies
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import './App.css';
import SideBar from './components/SideBar';
import Landing from "./pages/Landing/Landing";


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

const lightTheme = createTheme({
  shape: {
    borderRadius: 25,
  },   
  palette: {
    mode: 'light',
    primary: {
      main: '#ffa000',
    },
    secondary: {
      main: '#40c4ff',
    },
    heroContent: {
      main: '#979797',
    },    
    black: {
      main: '#000000'
    },

    background: {
      default: "#FAFAFA"
    },      
  },

  typography: {
    button: {
      textTransform: 'none'
    },    
    fontFamily: [
      'Plus Jakarta Sans',
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
    landing_title: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 800,
      fontFamily: 'Plus Jakarta Sans',
      color: 'black',   
      letterSpacing: '3px',          
      },    
    landing_menu: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'Plus Jakarta Sans',     
      color: 'black',        
      },   
    landing_button: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'Plus Jakarta Sans',     
      color: '#FFFFFF',
      },        

    hero_title: {
      lineHeight: 1.6,
      fontSize: 52,
      fontWeight: 800,  
      fontFamily: 'Plus Jakarta Sans',  
      color: 'black', 
      },              
    hero_content: {
      lineHeight: 1.6,
      fontSize: 18,
      fontWeight: 500,
      fontFamily: 'inter',      
      color: '#979797',
      },    
    hero_small: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'inter',      
      color: '#979797',
      },    
    hero_button: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'inter',      
      color: '#FFFFFF',
      },                     
  },  
});

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <Landing setToken={setToken}/>
      </ThemeProvider>        
    </>
    )
  }  

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>

              <SideBar/>
   
        </ThemeProvider>
    </div>
  )
}    

export default App;
