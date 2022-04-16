import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Main = () => {
  return (
    <Box padding={10} style={{ color: "#507844" }}>
      <Typography variant="h4" paddingBottom={2}>
        Hi There, I am Jisu
      </Typography>
      <Typography paddingBottom={2}>
        A <span style={{ color: "#ae4f2f" }}>full-stack software engineer</span>{" "}
        based in Brisbane, Australia.
      </Typography>
      <Typography paddingBottom={2}>
        I have a background in{" "}
        <span style={{ color: "#ae4f2f" }}>computer science</span>.
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
    </Box>
  );
};

export default Main;
