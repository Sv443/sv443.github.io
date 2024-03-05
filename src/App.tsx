import { ThemeProvider, useMediaQuery } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { createTheme } from "./theme";
import "./App.css";
import "@fontsource/roboto/400.css";

function App() {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({ darkMode });
  const page = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeToggle /> */}
      {page}
    </ThemeProvider>
  );
}

export default App;
