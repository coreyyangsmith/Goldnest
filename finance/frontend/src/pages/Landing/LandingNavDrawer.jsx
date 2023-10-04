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
                <Link to="/">Features</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/">Pricing</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/">About Us</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/">Login</Link>
              </ListItemText>
            </ListItem>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/">Sign Up</Link>
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