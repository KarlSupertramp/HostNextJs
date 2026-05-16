"use client"; 

import { Typography, Stack, Button, Box, Container } from "@mui/material";
import { LocaleSwitcher } from "../components/localeSwitcher";

function NavScrollButton({ targetId, label }) {
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
        minWidth: "130px",      
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
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "flex-start", lg: "center" },
          justifyContent: { lg: "space-between" },
          gap: 2,
        }}>
        <Stack sx={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: 1,
              //border: 2,
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
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            sx={{ color: "text.secondary" }}>
              UX Technologist
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", lg: "none" },
            gap: 1,
            gridAutoFlow: { lg: "column" },
            "@media (min-width:1200px)": {
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            },
          }}
        >
          {NavScrollButton({ targetId: "showroom-section", label: "Showroom" })}
          {NavScrollButton({ targetId: "skills-section", label: "Skills" })}
          {NavScrollButton({ targetId: "contact-section", label: "Contact" })}
          {<LocaleSwitcher/>}
        </Box>
      </Container>         
    </Box>  
}

