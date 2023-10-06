//-------------------------------------------------------//
//  File Name: LandingNavDrawer.jsx
//  Description: Slide-out drawer component for responsive nav bar collapse
//
//  Parents:
//      - LandingNav.jsx
//
//  Returns:
//      - Drawer Component
//
// Created By: Corey Yang-Smith
// Created: October 4th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React, { useState } from 'react';

// MUI Import
import { Drawer, List, ListItem, ListItemText } from "@mui/material"
import {IconButton} from '@mui/material';
import { GridMenuIcon } from '@mui/x-data-grid';

import StyledHashLinkTablet from '../../components/StyledHashLinkTablet';


// React Router Dom
import { Link } from "react-router-dom";


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingNavDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    console.log("drawer");
    console.log(openDrawer);
    return (
      <>
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor='right'
        >
          <List>
           <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <StyledHashLinkTablet smooth to="/#features">Features</StyledHashLinkTablet>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <StyledHashLinkTablet smooth to="/#price">Pricing</StyledHashLinkTablet>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <StyledHashLinkTablet to="/#contact"></StyledHashLinkTablet>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <StyledHashLinkTablet to="/login">Login</StyledHashLinkTablet>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <StyledHashLinkTablet to="/register">Sign Up</StyledHashLinkTablet>
              </ListItemText>
            </ListItem>            
          </List>
        </Drawer>

        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <GridMenuIcon />
        </IconButton>
      </>
    );
  }
  

//  EXPORTS
//-------------------------------------------------------//

export default LandingNavDrawer