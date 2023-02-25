import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InitialPage } from "./pages/InitialPage/initialPage";
import { ViewIssue } from "./pages/ViewIssue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
  },
  {
    path: "/issue/:idIssue",
    element: <ViewIssue />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
