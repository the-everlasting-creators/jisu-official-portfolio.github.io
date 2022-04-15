import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <Box
      padding={10}
      id="about"
      className="about"
      style={{ textAlign: "center" }}
    >
      <Box className="title" paddingTop={3} paddingBottom={5}>
        About
      </Box>
      <Box className="content">
        <Grid container justifyContent="space-evenly">
          <Grid item>character 1</Grid>
          <Grid item>character 2</Grid>
          <Grid item>character 3</Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
