import { pink } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      ms: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
