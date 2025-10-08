import React from "react";
import logo from "../assets/logo.png";
const LoadingSpinner = () => {
  return (
    <div className="">
      <h1 className="content-center flex items-center md:gap-6 gap-2 justify-center text-center text-2xl md:text-7xl h-screen font-bold text-gray-500">
        L
        <figure className="w-10 md:w-15 animate-spin opacity-50">
          <img className="" src={logo} />
        </figure>
        A D I N G . . .
      </h1>
    </div>
  );
};

export default LoadingSpinner;
