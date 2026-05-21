'use client';

import { Box, Container } from "@mui/material";
import Waterlevel from "../components/waterlevel";
import { BackButton } from "../sections/backbutton";

export default function WaterlevelPage() {
  return (
    <Container maxWidth="lg">
      <BackButton />
      <Box height={"85vh"}>
          <Waterlevel />
      </Box>
    </Container>
  );
}