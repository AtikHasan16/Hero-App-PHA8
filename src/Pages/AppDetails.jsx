import React from "react";
import Container from "../Components/Container";
import { useLocation } from "react-router";
import download from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const location = useLocation();
  //   console.log(location.state);
  const {
    title,
    id,
    image,
    downloads,
    ratingAvg,
    companyName,
    description,
    reviews,
    ratings,
    size,
  } = location.state;

  return (
    <div className=" bg-gray-100 py-20 font-inter">
      <Container>
        <div className="pb-10">
          <div className="flex flex-col md:flex-row justify-start gap-10">
            <figure className="bg-white h-fit w-fit rounded-2xl p-4 shadow-xl flex-1/3">
              <img src={image} className="mx-auto" alt="" />
            </figure>
            <div className="w-full">
              <div>
                <h1 className="font-bold text-4xl">{title}</h1>
                <p className="text-gray-500 font-bold ">
                  Developed by{" "}
                  <span className="text-blue-700">{companyName}</span>
                </p>
              </div>
              <div className="flex w-full flex-col ">
                <div className="divider "></div>
              </div>
              <div className="flex items-center gap-10">
                <div>
                  <div className="space-y-2">
                    <img src={download} alt="" />
                    <p className="text-gray-500">Downloads</p>
                    <h1 className="text-3xl font-bold">{downloads}</h1>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <img src={ratingImg} alt="" />
                    <p className="text-gray-500">Average Ratings</p>
                    <h1 className="text-3xl font-bold">{ratingAvg}</h1>
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <img src={reviewImg} alt="" />
                    <p className="text-gray-500">Total Reviews</p>
                    <h1 className="text-3xl font-bold">{reviews}</h1>
                  </div>
                </div>
              </div>
              <div className="py-10  ">
                <button className="btn btn-xl border-0 bg-linear-30 from-blue-800 to-purple-700  rounded-xl p-0 shadow-md">
                  <span className="skeleton btn btn-xl text-white bg-transparent border-0 ">
                    Install Now ({size}MB)
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col ">
          <div className="divider text-blue"></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Ratings</h1>
        </div>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart
              layout="vertical" // 👈 this makes it horizontal
              data={ratings}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <XAxis type="number" /> {/* numeric axis (horizontal) */}
              <YAxis dataKey="name" type="category" />{" "}
              {/* categories (vertical) */}
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#193cb8"
                barSize={30}
                radius={[0, 10, 10, 0]}
                isAnimationActive={true}
                animationDuration={1000}
                animationBegin={0}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </div>
  );
};

export default AppDetails;
