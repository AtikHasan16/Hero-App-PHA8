import Container from "../Components/Container";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const loaderData = useLoaderData();
  const allAppData = loaderData.data;
  // console.log(allAppData);

  return (
    <div className="bg-gray-100 font-inter py-20 ">
      <Container>
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold ">Our All Applications</h1>
            <p className="font-semibold text-gray-400">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              ({allAppData.length}) Apps Found
            </h2>
            <label className="input">
              <Search color="gray"></Search>
              <input
                className=""
                type="search"
                placeholder="Search App"
                name="search"
                id="appId"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6 ">
            {allAppData.map((data) => (
              <AppCard data={data} key={data.id}></AppCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Apps;
