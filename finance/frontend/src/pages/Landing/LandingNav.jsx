//-------------------------------------------------------//
//  File Name: LandingNav.jsx
//  Description: (Top) Navigation Bar for Landing Site
//
//  Parents:
//      - Landing.jsx
//
//  Returns:
//      - Top AppBar and Links for Landing Site
//
// Created By: Corey Yang-Smith
// Created: September 23rd, 2023
// Updated: October 4th, 2023
//-------------------------------------------------------//


//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react'

// Routing
import StyledLink from '../../components/StyledLink'

// React Router Import
import { Link } from 'react-router-dom';

// MUI Import
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Grid } from '@mui/material/'
import useMediaQuery from '@mui/material/useMediaQuery';

// My Components
import LandingNavDesktop from './LandingNavDesktop';
import LandingNavTablet from './LandingNavTablet';

//  STYLES
//-------------------------------------------------------//

const toolbarSX = {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #bbb'
};


//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingNav = () => {
  // Hooks

  const isDesktop = useMediaQuery('(min-width:785px)');

  if (isDesktop) {
      return <LandingNavDesktop/>
  } else {
    return <LandingNavTablet/> //TODO add mobile
  }
}

//  EXPORTS
//-------------------------------------------------------//

export default LandingNav