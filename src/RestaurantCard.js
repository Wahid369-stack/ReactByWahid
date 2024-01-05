import UserContext from "./utils/UserContext";
import { CDN_URL } from "./utils/constant";
import { useContext } from "react";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,costForTwo,cuisines,avgRating,sla}=resData?.info;
    // console.log(props);
    const {loggedInUser}= useContext(UserContext)
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img 
            alt="res-logo" 
            className="rounded-lg"
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{sla.deliveryTime}mins</h4>
            <h4>User:{loggedInUser}</h4>
        </div>
    )
}
export default RestaurantCard;