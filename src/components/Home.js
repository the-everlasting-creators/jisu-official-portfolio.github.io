import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Home = () => {
  return (
    <Box
      style={{ textAlign: "center" }}
      padding={10}
      id="home"
      className="home"
    >
      <Grid container justifyContent="space-evenly">
        <Grid
          item
          style={{
            textAlign: "center",
            background: "#6495ED",
            color: "white",
          }}
          borderRadius={5}
        >
          <Typography padding={2} variant="h4">
            H! There
          </Typography>
          <Typography padding={2} variant="h4">
            I am Jisu
          </Typography>
          <Typography padding={2} variant="h6">
            Full Stack Software Enginner
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="Jisu Choi" sx={{ width: 180, height: 180 }}>
            JS
          </Avatar>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
