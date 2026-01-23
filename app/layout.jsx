import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box, Container } from "@mui/material";

import theme from "../theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />         
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
