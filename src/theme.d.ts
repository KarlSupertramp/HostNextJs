import { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    data: {
      cyan: string;
      blue: string;
      orange: string;
      pink: string;
      red: string;
      green: string;
    };

    border: {
      main: string;
    };

    text: {
      faded: string;
    };

  }

  interface PaletteOptions {
    data?: {
      cyan?: string;
      blue?: string;
      orange?: string;
      pink?: string;
      red?: string;
      green?: string;
    };

     border?: {
      main?: string;
    };

     text?: {
      faded?: string;
    };
  }
}