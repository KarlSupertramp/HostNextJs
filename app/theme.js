"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: 
    { 
      main: "#eda916",
      offset: "#f5c870",
      hover: "#57513d",
      dark: "#32323a"
    },
  
    border: 
    { 
      main: "#e7d192" 
    },
    background: {
        default: "#46464b",
        paper: "#32323a",
        blurry: "#32323a52"
      },
    text: {
      primary: "#eda916",
      secondary: "#fffcef",
      faded: "#929087"
    }       
  },
  shape: {
    borderRadius: 12
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
          backgroundColor: "#eda916",
        },
  
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#f5c870",
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
          backgroundColor: "#eda916",
          Color: "#46464b",
          ":hover": {
            backgroundColor: "#46464b",
            color: "#eda916",
          },
        },     
      },
    },
  },
});

export default theme;
