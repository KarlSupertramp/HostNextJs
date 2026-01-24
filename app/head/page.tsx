import * as React from "react";

import { Typography, Stack, Button, Box, Container } from "@mui/material";
import Link from "next/link";

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <Button 
        variant="contained"
        sx={{
            minWidth: "130px",
            fontWeight: "bold",
            color: "#eda916",
            backgroundColor: "#282831",
            ":hover": {
                color: "#282831",
                backgroundColor: "#eda916",
            },
            }}>
            {label}
        </Button>
    </Link>
  );
}

export default function Head() {
  return (
    <Box sx={{ display: "flex", p: 3, bgcolor: "primary.main" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        >
        <Stack sx={{ flexDirection: "row", gap: 2 }}>
          <Box
            sx={{
              borderRadius: 1,
              border: 3,
              borderColor: "background.paper",
              width: 100,
              height: 100,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/12151775?v=4"
              alt="ProfilePicture"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>

          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "background.paper",
                fontSize: { xs: "h4.fontSize", sm: "h3.fontSize" },
              }}
              variant="h5"
            >
              Karl Martin
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "background.paper" }}>
              UX Technologist
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          sx={{ alignSelf: { xs: "flex-start", sm: "flex-end" } }}
        >
          {NavButton({ href: "/about", label: "About Me" })}
          {NavButton({ href: "/showroom", label: "Showroom" })}
          {NavButton({ href: "/skills", label: "Skills" })}
          {NavButton({ href: "/contact", label: "Contact" })}
        </Stack>
      </Container>
    </Box>
  );
}

