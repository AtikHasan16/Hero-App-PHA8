import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => axios("/SoftwareData.json"),
      },
      { path: "apps", element: <Apps></Apps> },
      { path: "installation", element: <Installation></Installation> },
    ],
  },
]);

export { router };
