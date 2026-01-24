"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button
} from "@mui/material";

import { BackButton, urlEndWith } from "../layout";
import { useEffect, useState } from "react";

function Feature({ title, body, href, imgSrc }) {
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 3,
        height: "100%",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        outlineColor: "border.main",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          height: "50%",
          borderRadius: "4px 4px 0 0",
        }}
      >
        <img
          src={imgSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </Box>
      <Button href={href} sx={{ width: "auto", m: 2 }} variant="contained">
        Open
      </Button>     
    </Card>
  );
}


export default function ShowroomPage() {

  const [isSubPage, setIsSubPage] = useState(false);
  useEffect(() => {
    setIsSubPage(urlEndWith("/showroom"));
  });

  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">

        {isSubPage && <BackButton />}

        <Typography variant="h3" component="h1" gutterBottom>
          Showroom
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This <b>Showroom</b> is my way of sharing projects that might otherwise sit forgotten in a repository. 
          Most of my work is done in Unity, which conveniently supports WebGL deployment - so I'll do my best to make my demos as cross-platform as possible. 
        </Typography>         

        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Feature
              title="Satellites"
              body="3D visualization of all plublicly documented satellites that orbit earth at this moment. Data provided by NORAD."
              href='/satellites/index.html'
              imgSrc={"/thumbSat.png"}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Feature
              title="Orbit Sandbox"
              body="A colorful simulation to explore mass, momentum, and gravity. Swipe or drag to create objects and watch 
                    them interact with the central star."
              href='/orbitSandbox/index.html'
              imgSrc={"/orbitSandbox.jpg"}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Feature
              title="Cube Puzzle"
              body="A sunday afternoon challenge: Recreating the famous cube puzzle hardly anyone can solve. 
                    I wanted it to have a realistic look and feel and straight forward contolls."
              href='/cubeGame/index.html'
              imgSrc={"/thumbCube.png"}
            />              
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Feature
              title="Flutter Template"
              body="For teaching myself how to make applications in Flutter  I decided to make a template for a shop application.
                    This may even help others get started with Flutter. Full code is available on GitHub."
              href="https://github.com/KarlSupertramp/WebApi-Flutter-Template"
              imgSrc={"/thumbFlutter.png"}
            />              
          </Grid>
        </Grid>        
      </Container>
    </Box>
  );
}
