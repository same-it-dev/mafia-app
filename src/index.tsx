import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux-store/store";
import { Provider } from "react-redux";
import { ResetStyles } from "./common/components";
import { ThemeProvider } from "@mui/material";
import theme from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ResetStyles />
      <App />
    </Provider>
  </ThemeProvider>
);
