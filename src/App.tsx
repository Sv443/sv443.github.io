import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { router } from "./routes";
import "./App.css";

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <ThemeToggle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
