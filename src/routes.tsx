import { createBrowserRouter } from "react-router-dom";
import Docs from "./Docs";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
]);
