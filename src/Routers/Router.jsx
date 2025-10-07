import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";
import AppDetails from "../Pages/AppDetails";
import { LoaderIcon } from "lucide-react";

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
        hydrateFallbackElement: <h1 className="h-screen">Loading...</h1>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => axios("/SoftwareData.json"),
        hydrateFallbackElement: <LoaderIcon></LoaderIcon>,
      },
      { path: "/installation", element: <Installation></Installation> },
      { path: "/appDetails/:appId", element: <AppDetails /> },
      { path: "*", element: <ErrorPage></ErrorPage> },
    ],
  },
]);

export { router };
