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
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "30px",
      lineHeight: "40px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      textAlign: "center",
      margin: "30px 0",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      textAlign: "center",
      margin: "30px 0",
    },
  },
});

export default theme;
