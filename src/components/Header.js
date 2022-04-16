import React from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <header>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        padding={5}
      >
        <Grid item>
          <Box>
            <Link href="#" underline="none">
              <Typography variant="h4" style={{ color: "#507844" }}>
                J!su
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <nav>
              <Link
                padding={5}
                href="#home"
                underline="hover"
                style={{ color: "#507844" }}
              >
                home
              </Link>
              <Link
                padding={5}
                href="#about"
                underline="hover"
                style={{ color: "#507844" }}
              >
                About
              </Link>
              <Link
                padding={5}
                href="#projects"
                underline="hover"
                style={{ color: "#507844" }}
              >
                Projects
              </Link>
              <Link
                padding={5}
                href="#writings"
                underline="hover"
                style={{ color: "#507844" }}
              >
                Writings
              </Link>
            </nav>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
