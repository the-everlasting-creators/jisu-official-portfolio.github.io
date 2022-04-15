import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Box
      style={{ textAlign: "center" }}
      padding={10}
      id="home"
      className="home"
    >
      <Grid container justifyContent="space-around">
        <Grid item>Content 1</Grid>
        <Grid item>image</Grid>
        <Grid item>Content 2</Grid>
      </Grid>
    </Box>
  );
};

export default Home;
