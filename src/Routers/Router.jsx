import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";
import AppDetails from "../Pages/AppDetails";
import { LoaderIcon } from "lucide-react";
import LoadingSpinner from "../LoadingPage/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
        loader: () => axios("/SoftwareData.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => axios("/SoftwareData.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      { path: "/installation", element: <Installation></Installation> },
      {
        path: "/appDetails/:appId",
        element: <AppDetails />,
        errorElement: <ErrorPage></ErrorPage>,
      },
      { path: "*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);

export { router };
