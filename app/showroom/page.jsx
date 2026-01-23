"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import Link from "next/link";

function Feature({ title, body, href, imgSrc }) {
  return (
    <Card
      component={Link}
      href={href}
      variant="outlined"
      sx={{
        height: "100%",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        outlineColor: "border.main",
        "&:hover": {
          outline: 2,
          outlineColor: "primary.main",
        },
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
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </Box>
    </Card>
  );
}

export default function ShowroomPage() {
  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          Showroom
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          This SHOWROOM is my way of sharing projects that might otherwise sit forgotten in a repository. 
          Most of my work is done in Unity, which conveniently supports WebGL deployment - so I'll do my best to make my demos as cross-platform as possible. 
        </Typography>         

        <Grid container spacing={2} sx={{ mt: 6 }}>
          <Grid item xs={12} sm={6}>
            <Feature
              title="Satellites"
              body="3D visualization of all plublicly documented satellites that orbit earth at this moment. Data provided by NORAD."
              href='/satellites/index.html'
              imgSrc={"/thumbSat.png"}
            />              
          </Grid>

          <Grid item xs={12} sm={6}>
            <Feature
              title="Orbit Sandbox"
              body="A colorful simulation to explore mass, momentum, and gravity. Swipe or drag to create objects and watch 
                    them interact with the central star."
              href='/orbitSandbox/index.html'
              imgSrc={"/orbitSandbox.jpg"}
            />              
          </Grid>

          <Grid item xs={12} sm={6}>
            <Feature
              title="Cube Puzzle"
              body="A sunday afternoon challenge. I tried to recreate the famous cube puzzle hardly anyone can solve. 
                    I wanted it to have a realistic look and feel and straight forward contolls."
              href='/cubeGame/index.html'
              imgSrc={"/thumbCube.png"}
            />              
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
