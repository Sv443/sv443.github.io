import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { router } from "./routes";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
