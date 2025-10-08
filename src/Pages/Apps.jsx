import Container from "../Components/Container";
import { Search } from "lucide-react";
import { useLoaderData } from "react-router";
import AppCard from "../Components/AppCard";
import { useState } from "react";
import LoadingSpinner from "../LoadingPage/LoadingSpinner";
const Apps = () => {
  const loaderData = useLoaderData();
  const allAppData = loaderData.data;
  // console.log(allAppData);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  console.log(loading);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const rawText = search.trim().toLocaleLowerCase();
  const searchedCard = allAppData.filter((appCard) =>
    appCard.title.trim().toLocaleLowerCase().includes(rawText)
  );

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
              ({searchedCard.length}) Apps Found
            </h2>
            <label className="input">
              <Search color="gray"></Search>
              <input
                value={search}
                onChange={(e) => handleSearch(e)}
                type="search"
                placeholder="Search App"
                name="search"
                id="appId"
              />
            </label>
          </div>

          {loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <div>
              {searchedCard.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6">
                  {searchedCard.map((data) => (
                    <AppCard data={data} key={data.id}></AppCard>
                  ))}
                </div>
              ) : (
                <div className="h-[calc(100dvh-700px)]">
                  <h1 className="text-center py-20 text-3xl font-bold text-gray-400">
                    No App Found
                  </h1>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Apps;
