import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import InstalledCard from "../Components/InstalledCard";
import { ArrowBigDown } from "lucide-react";

const Installation = () => {
  const [showInstalled, setShowInstalled] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const dataFromLocal = JSON.parse(localStorage.getItem("apps")) || [];
    setShowInstalled(dataFromLocal);
  }, []);
  const handleSort = (type) => {
    setSort(type);
    if (type === "High - Low") {
      const sortedCard = showInstalled.sort(
        (a, b) => b.downloads - a.downloads
      );
      setShowInstalled(sortedCard);
    } else {
      const sortedCard = showInstalled.sort(
        (a, b) => a.downloads - b.downloads
      );
      setShowInstalled(sortedCard);
    }
  };
  return (
    <div className="bg-gray-100  py-20 font-inter">
      <Container>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold ">Our All Applications</h1>
          <p className="font-semibold text-gray-400">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            ({showInstalled.length}) Apps Found
          </h2>
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 rounded-xl bg-blue-800 text-white"
            >
              {sort ? sort : "Sort by Size"} <ArrowBigDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button
                  onClick={() => handleSort("High - Low")}
                  className="btn  btn-ghost"
                >
                  Download : High - Low
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSort("Low - High")}
                  className="btn btn-ghost"
                >
                  Download : Low - High
                </button>
              </li>
            </ul>
          </div>
        </div>

        {showInstalled.length > 0 ? (
          <div className="space-y-6 py-13 min-h-[calc(100dvh-724px)]">
            {showInstalled.map((installData) => (
              <InstalledCard
                key={installData.id}
                installData={installData}
                showInstalled={showInstalled}
                setShowInstalled={setShowInstalled}
              ></InstalledCard>
            ))}
          </div>
        ) : (
          <div className="min-h-[calc(100dvh-700px)]">
            <h1 className="text-center py-20 text-3xl font-bold text-gray-400">
              No App Found
            </h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Installation;
