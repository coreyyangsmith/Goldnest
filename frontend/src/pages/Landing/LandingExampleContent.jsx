//-------------------------------------------------------//
//  File Name: LandingExampleContent.jsx
//  Description: Centered Exmple Content displayed on Landing Page
//
//  Requirements:
//      - Landing.jsx
//
//  Returns:
//      - Example Content Block
//
// Created By: Corey Yang-Smith
// Date: October 10th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from "react";

// MUI Import
import { Typography, Grid, Stack, Paper } from "@mui/material";

//  MAIN FUNCTION
//-------------------------------------------------------//

const LandingExampleContent = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Paper
          elevation={2}
          sx={{
            background: "#f3f3f3",
            minHeight: "400px",
            maxHeight: "600px",
            padding: "32px",
          }}
        >
          <Stack direction="column">
            <Typography variant="feature_heading" paddingTop={4}>
              Is financial success on your horizon?
              <Typography
                variant="feature_heading"
                sx={{
                  background:
                    "linear-gradient(to right, #ffc700, #ff8e37, #ff516e, #fc31a6, #a849d3)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  height: "1500px",
                }}
              >
                Goldnest
              </Typography>{" "}
              is here to help. What financial goals can we assist you in
              achieving?
            </Typography>

            <Typography variant="hero_content" paddingBottom={4}>
              With our customizable budget tracking web app, you're not just
              tracking expenses; you're charting a path to financial success.
              Embrace a brighter financial future with us today.
            </Typography>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={4} paddingLeft={2}>
        <Paper
          elevation={2}
          sx={{
            background: "#f3f3f3",
            minHeight: "400px",
            maxHeight: "550px",
            padding: "32px",
          }}
        >
          <Typography variant="hero-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque aliquet a odio eget egestas. Nulla vel commodo nisi.
            Quisque euismod id sapien non maximus. Nam ultrices tempor risus sed
            gravida.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

//  EXPORTS
//-------------------------------------------------------//

export default LandingExampleContent;
