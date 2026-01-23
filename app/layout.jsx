import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Toolbar, Typography, Stack, Button, Box } from "@mui/material";
import Link from "next/link";
import theme from "../theme";

function NavButton({ href, label }) {
  return (
    <Link href={href}>
      <Button>{label}</Button>
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
                  width: 60,
                  height: 60,
                  overflow: "hidden",
                  display: "flex",
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
                <Typography variant="h5">
                  Karl Martin
                </Typography>
                <Typography color={"text.secondary"}>
                    UX Technologist // Developer              
                </Typography>                      
              </Stack>
              <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
                {NavButton({ href: "/about", label: "About" })}
                {NavButton({ href: "/showroom", label: "Showroom" })}
                {NavButton({ href: "/contact", label: "Contact" })}
              </Stack>              
            </Toolbar>
          </AppBar>     
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
