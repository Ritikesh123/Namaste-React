import {CDN_URL} from "../utils/constants"

const RestaurantCard= (props) => {
    const {resData}=props;

    const {
        cloudinaryImageId,
        name, cuisines,
        avgRating, costForTwoString,
        deliveryTime
        } = resData?.data

        console.log(cloudinaryImageId);
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

    </div>
    );
};

export default RestaurantCard;