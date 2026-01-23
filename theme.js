"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#eda916" },
    secondary: { main: "#fffcef" },
    border: { main: "#bbb8e6" },
    background: {
      default: "#282831",
      paper: "#32323a",
    },
    text: {
      primary: "#eda916",
      secondary: "#fffcef",
    }       
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#32323ae0", 
          borderBottom: "1px solid #bbb8e6",
          color: "#eda916",
          backdropFilter: "blur(4px)",
        },
  
      },
    },    
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#bbb8e6",
          ":hover": {
            color: "#eda916",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#bbb8e6",
          ":hover": {
            color: "#eda916",
          },
        },
      },
    },
  },
});

export default theme;
