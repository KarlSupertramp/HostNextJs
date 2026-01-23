import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Toolbar, Typography, Stack, Button, Box, Container } from "@mui/material";
import Link from "next/link";
import theme from "../theme";

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <Button sx={{minWidth: "130px"}} variant="contained" >{label}</Button>
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />          
          <AppBar position="sticky" elevation={0}>
            <Toolbar>
              <Box 
                sx={{
                  borderRadius: 1,
                  border: 1,
                  borderColor: "background.paper",
                  width: 60,
                  height: 60,
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/12151775?v=4"
                  alt="Profile Picture of Karl Martin"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Stack padding={2}>                
                <Typography sx={{ fontWeight: "bold", color: "background.paper" }} variant="h5">
                  Karl Martin
                </Typography>
                <Typography sx={{ fontWeight: "bold", color: "background.paper" }}>
                    UX Technologist / Developer              
                </Typography>                      
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ m:1, justifyContent: "right", flexGrow: 1 }}>
                {NavButton({ href: "/about", label: "About Me" })}
                {NavButton({ href: "/showroom", label: "Showroom" })}
                {NavButton({ href: "/contact", label: "Contact" })}
              </Stack>              
            </Toolbar>
          </AppBar>     
          {children}
          <Box
            component="footer"
            sx={{
              marginTop: 4,
              padding: 3,
              textAlign: "center",
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body2" color="text.faded">
                &copy; {new Date().getFullYear()} Karl Uwe Martin
              </Typography>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
