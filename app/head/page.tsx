"use client"; 

import { Typography, Stack, Button, Box, Container } from "@mui/material";
import { LocaleSwitcher } from "../components/localeSwitcher";

function NavScrollButton({ targetId, label }: { targetId: string; label: string }) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Button
      onClick={handleScroll}
      sx={{
        borderRadius: 2,
        boxShadow: 1,
        minWidth: "120px"       
      }}
    >
      {label}
    </Button>
  );
}

export default function Head({ id }: { id?: string }) {
  return <Box id={id} 
      sx={{ 
        justifyContent: "center",
        display: "flex",
        bgcolor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: 5,
          py: 3,
          mx: 2,
          bgcolor: "background.defaultLight",
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: { lg: "space-between" },
          gap: 2,
        }}>
        <Stack sx={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: 1,
              borderColor: "border.secondary",
              width: 75,
              height: 75,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          > 
            <img
              src="https://avatars.githubusercontent.com/u/12151775?v=4"
              alt="ProfilePicture"
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(85%)" }}
            />
          </Box>

          <Stack>
            <Typography
              sx={{
                //fontWeight: "bold",
                color: "text.primary",     
              }}
              variant="h4"
            >
              Karl Martin
            </Typography>
            <Typography 
            variant="body1"
            sx={{ color: "border.secondary" }}>
              UX Technologist
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "none" },
            gap: 1,
            gridAutoFlow: { md: "column" },
            alignItems: "center",
            alignSelf: "flex-end",
            ml: { md: "auto" },
          }}
        >
          <NavScrollButton targetId="showroom-section" label="Showroom" />
          <NavScrollButton targetId="skills-section" label="Skills" />
          <NavScrollButton targetId="contact-section" label="Contact" />
          <LocaleSwitcher />
        </Box>
      </Container>         
    </Box>  
}

