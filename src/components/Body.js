import { useContext, useEffect, useState } from "react";
import ResCard, { isHaveOffer } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
// import { useGetItemsMutation } from "../utils/apiSlice";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestarurens] = useState([]);
  const [searchValue, SetSearchValue] = useState("");
  const status = useOnlineStatus();
  const { name, setName } = useContext(userContext);
  // const [getItems, { isLoading }] = useGetItemsMutation();
  let RestaurentOffer = isHaveOffer(ResCard);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await getItems();

  //       const restaurants = await data?.data?.cards[4]?.card?.card?.gridElements
  //         ?.infoWithStyle?.restaurants;
  //       if (restaurants) {
  //         setListOfRestaurents(restaurants);
  //         setFilteredRestarurens(restaurants);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, [getItems]);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = await json?.data?.cards[2]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

    if (restaurants) {
      setListOfRestaurents(restaurants);
      setFilteredRestarurens(restaurants);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!status) return <h1>You are offline..!</h1>;
  // if (isLoading) return <Shimmer />;
  // if (listOfRestaurents.length === 0) return <Shimmer />;

  return (
    <div className="m-5">
      <div className="flex gap-8 mb-3">
        <div className="">
          <input
            data-testid="searchInput"
            className="h-8 border-2 border-gray-400 rounded-md "
            type="text"
            value={searchValue || ""}
            onChange={(e) => SetSearchValue(e.target.value)}
          />
          <button
            className="px-4 py-2 ml-4 font-semibold bg-green-400 rounded-lg text-slate-100"
            onClick={() => {
              const searched = listOfRestaurents.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchValue.toLowerCase());
              });
              setFilteredRestarurens(searched);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 ml-4 font-semibold text-white bg-gray-400 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurents.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setFilteredRestarurens(filteredList);
          }}
        >
          Top rated restaurents
        </button>
        <label>Username:</label>
        <input
          className="border border-black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex flex-wrap gap-4 ">
        {
          filteredRestaurents.map((restaurent) => {
            return (
              <Link
                to={"/restaurants/" + restaurent.info.id}
                key={restaurent.info.id}
              >
                {restaurent?.info?.aggregatedDiscountInfoV3?.header ? (
                  <RestaurentOffer resData={restaurent} />
                ) : (
                  <ResCard resData={restaurent} />
                )}
              </Link>
            );
          })}
       
      </div>
    </div>
  );
};

export default Body;
