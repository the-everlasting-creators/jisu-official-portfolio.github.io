import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const About = () => {
  return (
    <Box
      padding={10}
      id="about"
      className="about"
      color="#6495ED"
      textAlign="center"
    >
      <Box className="title" paddingTop={3} paddingBottom={5}>
        <Typography variant="h4">About Me</Typography>
      </Box>
      <Box className="content">
        <Typography paddingBottom={2}>
          I'm Jisu, a full-stack software engineer based in Bribane, Australia.
        </Typography>
        <Typography paddingBottom={2}>
          I have a background in computer science and I enjoy helping people
          transforming their ideas into the world.
        </Typography>
        <Typography paddingBottom={2}>
          I am currently working for{" "}
          <span>
            <Link href="https://credfin.io/">Credfin Australia</Link>
          </span>{" "}
          as a senior software engineer.
        </Typography>
        <Typography>"No greater engineer work 9 to 5"</Typography>
      </Box>
    </Box>
  );
};

export default About;
