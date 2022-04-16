import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const Main = () => {
  return (
    <Box padding={10}>
      <Grid
        container
        justifyContent="space-evenly"
        style={{ color: "white" }}
        alignItems="center"
        justifyItems="center"
      >
        <Grid item>
          <Typography variant="h4" paddingBottom={2}>
            I am Jisu
          </Typography>
          <Typography paddingBottom={2}>
            A full-stack software engineer based in Bribane, Australia.
          </Typography>
          <Typography paddingBottom={2}>
            I have a background in computer science.
          </Typography>
          <Typography paddingBottom={2}>
            I enjoy helping people transforming their ideas into the world.
          </Typography>
          <Typography paddingBottom={2}>
            I am currently working for{" "}
            <span>
              <Link
                href="https://credfin.io/"
                target="_blank"
                underline="hover"
                style={{ color: "#ae4f2f" }}
              >
                Credfin Australia
              </Link>
            </span>{" "}
            as a senior software engineer.
          </Typography>
          <Typography>"No greater engineer work 9 to 5"</Typography>
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

export default Main;
