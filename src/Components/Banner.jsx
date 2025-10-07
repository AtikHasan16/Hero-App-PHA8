import React from "react";
import { Link } from "react-router";
import google from "../assets/googleplay.png";
import appStore from "../assets/AppStore.png";
import heroImg from "../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <div className=" py-20 font-inter">
        <div className=" text-center">
          <div className="">
            <div className="">
              <h1 className="md:text-7xl text-4xl font-bold">
                WE Build <br />
                <span className="text-blue-800 font-extrabold">
                  Productive{" "}
                </span>
                Apps
              </h1>
              <p className="py-6 max-w-2xl mx-auto">
                At HeroApp, we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting.Our goal is to turn
                your ideas into digital experiences that truly make an impact.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Link
                  to={"https://play.google.com/store/games?hl=en&pli=1"}
                  target={"_blank"}
                  className="btn btn-xl rounded-xl font-bold text-gray-600 hover:scale-105 hover:bg-blue-800 hover:text-white transition duration-500"
                >
                  <img src={google} alt="" />
                  Google Play
                </Link>
                <Link
                  to={"https://www.apple.com/app-store/"}
                  target={"_blank"}
                  className="btn btn-xl rounded-xl font-bold text-gray-600 hover:scale-105 hover:bg-blue-800 hover:text-white transition duration-500"
                >
                  <img src={appStore} alt="" />
                  App Store
                </Link>
              </div>
            </div>
            <div className="pt-10">
              <img src={heroImg} className="mx-auto" alt="" />
              <div className="bg-linear-120 from-purple-600 to-blue-800 text-white py-20 space-y-10">
                <h1 className="text-5xl font-bold">
                  Trusted by Millions, Built for You
                </h1>
                <div className="flex flex-col md:flex-row gap-10 justify-around items-center">
                  <div className="space-y-4">
                    <p className="text-gray-300">Total Download</p>
                    <h1 className="font-extrabold text-6xl">29.6M</h1>
                    <p className="text-gray-300">21% more than last month</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300">Total Download</p>
                    <h1 className="font-extrabold text-6xl">906K</h1>
                    <p className="text-gray-300">46% more than last month</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300">Total Download</p>
                    <h1 className="font-extrabold text-6xl">132+</h1>
                    <p className="text-gray-300">31 more will Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
