import React from "react";
import Container from "../Components/Container";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import AppContainer from "../Components/AppContainer";

const Home = () => {
  const appData = useLoaderData();
  const appForHome = appData.data.slice(0, 8);
  console.log(appData.data);

  return (
    <div className="bg-gray-100">
      <Banner></Banner>
      <AppContainer appForHome={appForHome}></AppContainer>
    </div>
  );
};

export default Home;
