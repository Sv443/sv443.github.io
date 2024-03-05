import type { RouteObject } from "react-router-dom";
import { Home, Imprint } from "./pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "imprint",
    element: <Imprint />,
  },
];
