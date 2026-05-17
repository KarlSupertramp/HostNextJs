'use client';

import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        py: 4,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "clamp(3rem, 15vw, 12rem)",
            fontWeight: 800,
            color: "text.primary",
            mb: 2
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: "text.secondary",
            mb: 2,
            fontWeight: 600,
          }}
        >
          {t("title")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.faded",
            mb: 4,
            fontSize: "1.1rem",
          }}
        >
          {t("description")}
        </Typography>
        
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5               
              }}
            >
              {"Home"}
            </Button>
          </Link>         
        </Box>
      </Container>
    </Box>
  );
}
