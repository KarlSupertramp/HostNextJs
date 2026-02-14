import { Typography, Stack, Button, Box, Container } from "@mui/material";
import Link from "next/link";

import { LocaleSwitcher } from "../components/localeSwitcher";

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <Button        
        sx={{
            boxShadow: 2,
            borderRadius: 2, 
            fontWeight: "bold",
            minWidth: "130px",
            color: "primary.main",
            backgroundColor: "primary.dark",
            ":hover": {
                color: "primary.dark",
                backgroundColor: "primary.main",
            },
            }}>
            {label}
        </Button>
    </Link>
  );
}

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
        boxShadow: 2,
        borderRadius: 2,
        fontWeight: "bold",
        minWidth: "130px",
        color: "primary.main",
        backgroundColor: "primary.dark",
        ":hover": {
          color: "primary.dark",
          backgroundColor: "primary.main",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default function Head() {

  return (
    <Box sx={{ justifyContent: "center", display: "flex", bgcolor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: 5,
          py: 3,
          mx: 2,
          bgcolor: "primary.main",
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
        <Stack sx={{ flexDirection: "row", gap: 2 }}>
          <Box
            sx={{
              borderRadius: 1,
              border: 3,
              boxShadow: 2,
              borderColor: "background.paper",
              width: { xs: 80, sm: 128 },
              height: { xs: 80, sm: 128 },
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
              variant="h4"
            >
              Karl Martin
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "background.paper" }}>
              UX Technologist
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            alignSelf: "flex-end",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "none" },
            gap: 1,
            gridAutoFlow: { sm: "column" },
            justifyContent: { sm: "flex-end" },
            ...( {
              "@media (min-width:600px)": {
                display: "flex",
                flexDirection: "row",
                gap: "5px",
              },
            }),
          }}
        >
          {NavScrollButton({ targetId: "showroom-section", label: "Showroom" })}
          {NavScrollButton({ targetId: "skills-section", label: "Skills" })}
          {/* {NavButton({ href: "/about", label: "About Me" })} */}
          {NavScrollButton({ targetId: "contact-section", label: "Contact" })}
          {<LocaleSwitcher/>}
        </Box>
      </Container>
    </Box>
  );
}

