import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import swiggy from "./swiggy.json"

// header("Acess-Control-Allow-Origin: http://localhost:1234/, https://food-delivery234.netlify.app/");
// header("Acess-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
// header("Acess-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  const ResturantCardPromted = withPromotedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5952314&lng=85.08308040000001&page_type=DESKTOP_WEB_LISTING"
    // );

    // const data = await fetch(swiggy);
    const json = swiggy;
    // console.log(json);

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box px-4 py-1.5 m-4 bg-green-200 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1.5 m-4 bg-green-200 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="filter-btn px-4 py-1.5 bg-green-200 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="px-2">UserName : </label>
          <input className="filter-btn px-4 py-1.5 bg-green-200 rounded-lg"/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >

          {restaurant?.info.promoted ? (
            <ResturantCardPromted resData={restaurant?.info}/>
           ) : (
            <RestaurantCard resData={restaurant?.info} />
          )}
          
          </Link>
        ))}
      </div>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default Body;