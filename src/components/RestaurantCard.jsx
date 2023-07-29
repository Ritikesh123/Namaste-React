import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {CDN_URL} from "../utils/constants"

const RestaurantCard= (props) => {

  const {loggedInUser} = useContext(UserContext);
    const {resData}=props;

    const {
        cloudinaryImageId,
        name, cuisines,
        avgRating, costForTwoString,
        deliveryTime
        } = resData?.data

        // console.log(cloudinaryImageId);
    return (
    <div className="p-4 m-4 w-[270px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <img 
            className="res-logo rounded-lg"
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}
         />
        <h3 className="font-bold py-4 text-base">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}*</h4>
        <h4>{costForTwoString}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4> User : {loggedInUser} </h4>

    </div>
    );
};

// Higher order component

// input - RestaurantCard --> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
          <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

export default RestaurantCard;