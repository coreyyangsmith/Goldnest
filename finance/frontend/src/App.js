// React
import React, { useState } from "react"
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

    success: {
      main: '#72EA8C',
    },    

    heroContent: {
      main: '#979797',
    },    

    black: {
      main: '#000000'
    },

    grayBtn: {
      main: '#dbdbdb',
    },    

    basicTier: {
      main: '#dbdbdb',
    },  
    
    proTier: {
      main: '#40c4ff',
    },  
    
    powerTier: {
      main: '#000000',
    },      

    background: {
      default: "#FAFAFA",
    },      

    appBackground: {
      default: "#ebebeb",
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
      
    feature_heading: {
      lineHeight: 1.6,
      fontSize: 36,
      fontWeight: 600,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#000000',
      },   
    card_heading: {
      lineHeight: 1.6,
      fontSize: 20,
      fontWeight: 800,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#000000',
      },  
    card_body: {
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'inter',      
      color: '#979797',
      },    
    card_link: {
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'inter',   
      fontStyle: 'underline',   
      color: '#ffa000',
      },  
    prices_heading: {
      lineHeight: 1.6,
      fontSize: 42,
      fontWeight: 800,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#000000',
      },            
    prices_list: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'inter',      
      color: '#000000',
      },    
      
    prices_card_heading: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#717171',
      },        
      
    prices_card_body: {
      lineHeight: 1.6,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#717171',
      },    
      
    dashboard_heading: {
      lineHeight: 1.6,
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#000000',
      },  
      
    dashboard_card_heading: {
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'Plus Jakarta Sans',      
      color: '#717171',
      },           
      
    dashboard_card_heavy: {
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'inter',      
      color: '#000000',
      },       
      
    dashboard_card_light: {
      lineHeight: 1.6,
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'inter',      
      color: '#000000',
      },    
      
    dashboard_small_card_heavy: {
      lineHeight: 1.6,
      fontSize: 11,
      fontWeight: 650,
      fontFamily: 'inter',      
      color: '#000000',
      },            
  },  
});

const App = () => {
  const { token, setToken } = useToken();
  const [themeColor, setThemeColor] = useState(lightTheme)

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
        <ThemeProvider theme={themeColor}>
          <CssBaseline/>

              <SideBar activeTheme={themeColor} setTheme={setThemeColor} lightTheme={lightTheme} darkTheme={darkTheme}/>
   
        </ThemeProvider>
    </div>
  )
}    

export default App;
