//-------------------------------------------------------//
//  File Name: SideBar.jsx
//  Description:
//
//  Requirements:
//      - TODO
//
//  Returns:
//      - TODO
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import 
import * as React from 'react';
import { useEffect } from 'react';
import useToken from '../hooks/useToken';

// MUI Import
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Routing
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom";

// Icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; //Dashboard
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; //Accounts
import PaidIcon from '@mui/icons-material/Paid'; //Budget
import AssessmentIcon from '@mui/icons-material/Assessment'; //Reports
import StorageIcon from '@mui/icons-material/Storage'; //Database
import AddIcon from '@mui/icons-material/Add'; //Add new
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Profile
import SettingsIcon from '@mui/icons-material/Settings'; //Settings
import LogoutIcon from '@mui/icons-material/Logout'; // Logout
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Pages
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import Accounts from '../pages/Accounts/Accounts.jsx'
import Budget from '../pages/Budget/Budget.jsx'
import Reports from '../pages/Reports/Reports.jsx'

import Database from '../pages/Database/Database.jsx'

import Profile from '../pages/Profile/Profile.jsx'
import Settings from '../pages/Settings/Settings.jsx'
import Logout from '../pages/Login/Logout.jsx'

// Context
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';


//  UTILITY
//-------------------------------------------------------//

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

//  MAIN FUNCTION
//-------------------------------------------------------//

export default function MiniDrawer(props) {
  const { token } = useToken();  
  const { authUser, 
          setAuthUser, 
          isLoggedIn, 
          setIsLoggedIn } = useAuth()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);          

  useEffect(() => {
    const fetchCurrentUser = async() => {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/users/current/',{
            headers: {
              'Authorization': `token ${token}`
            }
          })
          setAuthUser(response.data.username);
          setIsLoggedIn(true);
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
          setAuthUser(null);    
          setIsLoggedIn(false);                               
      }
  }
  fetchCurrentUser();
  }, [setAuthUser, setIsLoggedIn, token])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const toggleTheme = () => {
    if (props.activeTheme === props.lightTheme)
    {
      props.setTheme(props.darkTheme)
    }
    else
    {
      props.setTheme(props.lightTheme)
    }

  }

  const darkModeToggle = (props) => {
    if (props.activeTheme === props.lightTheme)
    {
      return (
        <ListItem key="DarkMode" disablePadding sx={{ display: 'block'}}>
        <ListItemButton onClick={() => {toggleTheme(props)}} sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
          <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
            <DarkModeIcon/>        
          </ListItemIcon>
          <ListItemText secondary="Logout" sx={{ opacity: open ? 1 : 0 }}/>                 
        </ListItemButton>
      </ListItem>            

      )

    } else {
      return (
        <ListItem key="DarkMode" disablePadding sx={{ display: 'block'}}>
        <ListItemButton onClick={() => {toggleTheme(props)}} sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
          <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
            <WbSunnyIcon/>        
          </ListItemIcon>
          <ListItemText secondary="Logout" sx={{ opacity: open ? 1 : 0 }}/>                 
        </ListItemButton>
      </ListItem>       
      )
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <PaidIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />          
          <Typography variant="h6" noWrap component="div">
            GOLDNEST
          </Typography>
          <Typography padding={3}>
            Current User: {authUser} | {token} | {isLoggedIn.toString()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem key="My Dashboard" component={Link} to="/" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <SpaceDashboardIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="My Dashboard" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>

          <ListItem key="My Accounts" component={Link} to="/accounts" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AccountBalanceIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="My Accounts" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>
          
          <ListItem key="My Budget" component={Link} to="/budget" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <PaidIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="My Budget" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>

          <ListItem key="My Reports" component={Link} to="/reports" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AssessmentIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="My Reports" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>                              
        </List>
        <Divider />
        <List>

        <ListItem key="Database" component={Link} to="/data" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <StorageIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="Database" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>    

          <ListItem key="Add New Data" component={HashLink} to="/data#new-form" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="Add New Data" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>                        
        </List>
        <Divider />

        <List>
          <ListItem key="Profile" component={Link} to="/profile" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AccountBoxIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="Profile" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>    

          <ListItem key="Settings" component={Link} to="/profile/settings" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <SettingsIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="Settings" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>       

          <ListItem key="Logout" component={Link} to="/logout" disablePadding sx={{ display: 'block'}}>
            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <LogoutIcon/>                            
              </ListItemIcon>
              <ListItemText secondary="Logout" sx={{ opacity: open ? 1 : 0 }}/>                 
            </ListItemButton>
          </ListItem>                     
          <Divider />
          {darkModeToggle(props)}
           

        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <Routes>        
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/reports" element={<Reports />} />             
                <Route path="/data" element={<Database />} />
                <Route path="/data" element={<Database />} />                
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/settings" element={<Settings />} />            

                <Route path="/logout" element={<Logout />} />                         
            </Routes>  
      </Box>
    </Box>
  );
}