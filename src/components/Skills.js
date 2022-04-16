import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Skills = () => {
  return (
    <Box>
      <Box padding={5}>
        <Typography variant="h4" color="white">
          Skills
        </Typography>
      </Box>
      <Box paddingTop={3} paddingBottom={5}>
        <Grid container justifyContent="space-evenly" color="white">
          <Grid item>Javascript</Grid>
          <Grid item>Typescript</Grid>
          <Grid item>NodeJS</Grid>
          <Grid item>Docker</Grid>
          <Grid item>Kubernetes</Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
