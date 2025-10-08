import { Link } from "react-router";
import noFountImg from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="font-inter">
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <img src={noFountImg} alt="" />
        <h1 className="text-4xl font-bold">Oops, App not found!</h1>
        <p>The App you are looking for is not available.</p>
        <div className="space-x-3">
          <Link
            to={"/"}
            className=" btn btn-lg bg-linear-120 from-purple-600 to-blue-800 text-white
            rounded-lg "
          >
            Go Back!
          </Link>
          <Link
            to={"/apps"}
            className=" btn btn-lg bg-linear-120 from-purple-600 to-blue-800 text-white
            rounded-lg "
          >
            Brows App!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
