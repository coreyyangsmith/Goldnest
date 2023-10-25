//-------------------------------------------------------//
//  File Name: LandingHeroContent.jsx
//  Description: Centered Hero Content displayed on Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Hero Content Block
//
// Created By: Corey Yang-Smith
// Date: October 4th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from "react";

// MUI Imports
import { Typography, Button, Stack, Box } from "@mui/material";

// React Router Dom Import
import { Link } from "react-router-dom";

// Assets Imports
import WindowBackground from "../../assets/images/WindowBackground.png";

//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingHeroContent = () => {
  return (
    <Stack spacing={2} direction="column" sx={{ marginTop: 3 }}>
      <div id="home" />
      <Typography id="home" variant="hero_content" align="center">
        Your Money, Your Rules: Unleash Financial Freedom
      </Typography>
      <Typography variant="hero_title" align="center">
        Gain insights on your spending
        <Typography
          variant="hero_title"
          sx={{
            background: "linear-gradient(to right, #FF00B8, #004BDD, #8F00FF)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {" "}
          using AI
        </Typography>
      </Typography>

      <Box align="center">
        <Button
          variant="contained"
          color="black"
          sx={{ paddingTop: 2, paddingBottom: 2, width: 250 }}
        >
          <Link to="/register">
            <Typography variant="hero_button">Create account</Typography>
          </Link>
        </Button>
      </Box>

      <Typography variant="hero_small" align="center">
        30 Days free trial | No credit card required
      </Typography>

      <Box
        component="img"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "auto",
          width: "100%",
        }}
        alt="Window"
        src={WindowBackground}
      />
    </Stack>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default LandingHeroContent;
