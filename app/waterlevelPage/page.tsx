'use client';

export const dynamic = 'force-dynamic';

import { Box, Container } from "@mui/material";
import Waterlevel from "../components/waterlevel";
import { BackButton } from "../sections/backbutton";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

export default function WaterlevelPage() {
  const embedded = useSearchParams().get("embedded") === "true";

  return (
    <Container maxWidth="lg">
      {!embedded && <BackButton />}
      <Box height={"85vh"}>
        <Suspense fallback={<div>Loading waterlevel...</div>}>
          <Waterlevel />
        </Suspense>
      </Box>
    </Container>
  );
}