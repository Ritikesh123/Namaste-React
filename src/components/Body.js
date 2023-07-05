import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body= () => {

    // local state variable - super powerful varialble
        const [listOfRestaurant, setListOfRestaurant]= useState([]);
        const [filteredRestaurant, setFilteredRestaurant]= useState([]);
        
        const [searchText, setSearchText] = useState("");
        
    
    // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
        console.log("body rendered");

     

        useEffect(() => {
            fetchData();
        },[]);

        const fetchData= async () => {
            const data= await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5690788&lng=85.0978351&page_type=DESKTOP_WEB_LISTING"
                );

                const json= await data.json();
                // console.log(json);

                // optional chaning
                setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
                setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        };

        const onlineStatus=useOnlineStatus();
            if(onlineStatus===false) 
                return(
                    <h2>Looks like you are offline.....
                        Please check your internet connection!!!!!
                    </h2>
                );
        // Conditional Rendering
        // if(listOfRestaurant.length === 0){
        //     return <Shimmer/>
        // }

    return listOfRestaurant.length === 0 ?  <Shimmer/> :(
      
     <div className="body">
        <div className="filter"> 
           <div className="search">
            <input type="text" className="search-box" 
            value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button
            onClick={()=>{
                // filtered the restaurant card and update the UI
                // SearchText
                console.log("searchText");

                const filteredRestaurant=
                listOfRestaurant.filter((res)=>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);

            }}
            >
                search
            </button>
           </div>

            <button className="filter-btn" 
            onClick={()=>{

               const filteredList= listOfRestaurant.filter(
                (res)=>res.data.avgRating>4.0
                ); 
                    setListOfRestaurant(filteredList);
            }}
            
            >Top rated restaurants
            </button> 
        </div>
        <div className="res-container">
            {
            filteredRestaurant.map((restaurant) => (
           <Link key={restaurant.data.id}
           to={"/restaurant/" +restaurant.data.id}
           > 
            <RestaurantCard resData = {restaurant}/>
           </Link>
          ))  }
            
           </div>
    </div>
   
    );
};

export default Body;