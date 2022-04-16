import React from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

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
            <Link href="#" underline="hover">
              Jisu
            </Link>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <nav>
              <Link padding={5} href="#home" underline="hover">
                home
              </Link>
              <Link padding={5} href="#about" underline="hover">
                About
              </Link>
            </nav>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
