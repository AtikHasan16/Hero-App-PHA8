import React from "react";
import Container from "../Components/Container";

const Installation = () => {
  return (
    <div className="bg-gray-100  py-20">
      <Container>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold ">Our All Applications</h1>
          <p className="font-semibold text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">({0}) Apps Found</h2>
          <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By {}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
