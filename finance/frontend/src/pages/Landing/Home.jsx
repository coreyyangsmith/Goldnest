//-------------------------------------------------------//
//  File Name: Home.jsx
//  Description: Home Page for Landing Site
//
//  Parents:
//      - Landing.jsx
//
//  Returns:
//      - Home Page Content
//
// Created By: Corey Yang-Smith
// Date: September 24rd, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from "react";

// MUI Import
import { Grid } from "@mui/material";

// My Page Imports
import LandingHeroContent from "./LandingHeroContent";
import LandingFeatureContent from "./LandingFeatureContent";
import LandingPriceContent from "./LandingPriceContent";
import LandingExampleContent from "./LandingExampleContent";

//  MAIN FUNCTION
//-------------------------------------------------------//

const Home = () => {
  return (
    <>
      {/* HERO CONTENT */}
      <Grid container justify-content="center" alignContent="center">
        <Grid item xs={3} />
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <LandingHeroContent />
        </Grid>
        <Grid item xs={3} />
      </Grid>

      {/* EXAMPLE CONTENT */}
      <LandingExampleContent />

      {/* FEATURE CONTENT */}
      <LandingFeatureContent />

      {/* PRICE CONTENT */}
      <LandingPriceContent />
    </>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default Home;
