import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <Box padding={5}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/jisu-choi-theterrificman/"
              target="_blank"
              style={{ color: "#507844" }}
            >
              <LinkedInIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://github.com/the-everlasting-creators"
              target="_blank"
              style={{ color: "#507844" }}
            >
              <GitHubIcon />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
