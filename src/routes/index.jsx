import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <h1>Not Found 404.</h1>,
  },
]);
