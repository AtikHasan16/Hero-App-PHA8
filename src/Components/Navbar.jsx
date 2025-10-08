import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AppWindow, Download, Github, Home, Settings } from "lucide-react";
const Navbar = () => {
  const navLinks = (
    <div className="flex flex-col md:flex-row md:gap-10 font-bold ">
      <NavLink to={"/"} className={"btn md:btn-ghost text-lg"}>
        <Home></Home> Home
      </NavLink>
      <NavLink to={"/apps"} className={"btn md:btn-ghost text-lg"}>
        <AppWindow></AppWindow> Apps
      </NavLink>
      <NavLink to={"/installation"} className={"btn md:btn-ghost text-lg"}>
        <Download></Download> Installation
      </NavLink>
    </div>
  );
  return (
    <div className="bg-white">
      <Container>
        <div className="navbar py-4 px-0 bg-base-100 font-inter">
          <div className="navbar-start">
            <div className="dropdown pr-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link
              to={"/"}
              className=" flex items-center justify-center font-bold gap-2 text-3xl text-blue-800"
            >
              <img src={logo} className="w-10" alt="" />
              HeroApp
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to={"https://github.com/AtikHasan16"}
              target={"_blank"}
              className="btn rounded-lg p-6 bg-linear-120 from-purple-600 to-blue-800 text-white text-lg hover:scale-105 transition duration-300 hover:bg-linear-90 hover:from-black"
            >
              <Github /> Contribute
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
