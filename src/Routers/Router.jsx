import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import axios from "axios";
import AppDetails from "../Pages/AppDetails";
import { LoaderIcon } from "lucide-react";
import LoadingSpinner from "../LoadingPage/LoadingSpinner";
import NotFound from "../ErrorPage/NotFound";
import ErrorPage from "../ErrorPage/ErrorPage";

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
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => axios("/SoftwareData.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/installation",
        loader: async () => {
          return new Promise((resolve) => setTimeout(resolve, 300));
        },
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        element: <Installation></Installation>,
      },
      {
        path: "/appDetails/:appId",
        element: <AppDetails />,
        errorElement: <NotFound></NotFound>,
      },
    ],
  },
]);

export { router };
