import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "./theme";
import "./App.css";
import "@fontsource/roboto/400.css";

function App() {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({ darkMode });
  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeToggle /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
