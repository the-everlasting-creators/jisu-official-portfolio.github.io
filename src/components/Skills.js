import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Skills = () => {
  return (
    <Box
      padding={10}
      id="skills"
      className="skills"
      style={{ textAlign: "center" }}
    >
      <Box className="title">Skills</Box>
      <Box className="content">
        <Grid
          container
          justifyContent="space-evenly"
          paddingTop={3}
          paddingBottom={5}
        >
          <Grid item>Javascript</Grid>
          <Grid item>Typescript</Grid>
          <Grid item>Nodejs</Grid>
          <Grid item>Docker/Kubernetes</Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
