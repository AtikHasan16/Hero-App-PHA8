import React from "react";
import ratingImg from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import { updateToLocal } from "../LocalDB/LocalStorage";
import { Bounce, toast, ToastContainer } from "react-toastify";
const InstalledCard = ({ installData, showInstalled, setShowInstalled }) => {
  const handleUninstall = () => {
    const removeApp = showInstalled.filter(
      (data) => data.id !== installData.id
    );
    toast.info("Successfully Uninstalled the App!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setShowInstalled(removeApp);
    updateToLocal(installData.id);
  };
  return (
    <>
      <div className="bg-white flex sm:justify-between items-center p-6 rounded-2xl shadow-md shadow-gray-300 flex-col sm:flex-row gap-4 hover:scale-105 transition duration-300">
        <div className="flex items-center sm:gap-10 ">
          <figure className="w-20">
            <img src={installData.image} alt="" />
          </figure>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold ml-4">{installData.title}</h1>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <p className="btn  text-green-700 border-0 rounded-2xl">
                <img src={download} width={"14px"} alt="" />{" "}
                {installData.downloads}
              </p>
              <p className="btn text-orange-400 border-0 rounded-2xl">
                <img src={ratingImg} width={"14px"} alt="" />{" "}
                {installData.ratingAvg}
              </p>
              <p className="btn text-blue-400 border-0 rounded-2xl">
                {installData.size} MB
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleUninstall()}
          className="btn border-0 bg-linear-30 from-blue-800 to-purple-700 rounded-md text-white"
        >
          Uninstall
        </button>
      </div>
    </>
  );
};

export default InstalledCard;
