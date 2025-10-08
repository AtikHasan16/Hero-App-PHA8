import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../LoadingPage/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let timer;
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      timer = setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [navigation.state]);
  return (
    <>
      <Navbar></Navbar>
      {loading ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default MainLayout;
