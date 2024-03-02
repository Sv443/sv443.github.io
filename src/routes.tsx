import { createBrowserRouter } from "react-router-dom";
import { Home, Imprint } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "imprint",
    element: <Imprint />,
  },
]);
