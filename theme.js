"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: 
    { 
      main: "#eda916",
      offset: "#f5c870"
    },
    secondary: 
    { 
      main: "#fffcef",
      offset: "#f2f0e8"
    },
    border: 
    { 
      main: "#e7d192" 
    },
    background: {
        default: "#282831",
        paper: "#32323a",
        blurry: "#9796919d"
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
          Color: "#282831",
          ":hover": {
            backgroundColor: "#282831",
            color: "#eda916",
          },
        },     
      },
    },
  },
});

export default theme;
