import React from "react";
import Container from "./Container";
import AppCard from "./AppCard";
import { Link } from "react-router";

const AppContainer = ({ appForHome }) => {
  return (
    <div className="pb-20 font-inter">
      <Container>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-gray-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6">
          {appForHome.map((data) => (
            <AppCard key={data.id} data={data}></AppCard>
          ))}
        </div>
        <div className=" mt-10 text-center">
          <Link
            to={"/apps"}
            className="btn btn-xl text-white rounded-xl bg-linear-60 from-blue-800 to-purple-700"
          >
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AppContainer;
