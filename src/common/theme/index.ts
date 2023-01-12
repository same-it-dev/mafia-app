import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#11131a",
      contrastText: "#abb0c5",
    },
    secondary: {
      main: "#f0cd87",
      contrastText: "#0c0d12",
    },
  },
  typography: {
    h1: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "35px",
      lineHeight: "40px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      textAlign: "center",
      margin: "40px 0",
    },
    h2: {
      fontFamily: "Cuprum",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "28px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      textAlign: "center",
      margin: "40px 0",
    },
  },
});

export default theme;
