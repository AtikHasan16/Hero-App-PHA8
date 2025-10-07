import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      { index: true, path: "/", element: <Home></Home> },
      { path: "apps", element: <Apps></Apps> },
      { path: "installation", element: <Installation></Installation> },
    ],
  },
]);

export { router };
