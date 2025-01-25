import { useContext, useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [listofRestaurant,setListofRestauarnt]=useState([]);
    const [filterListofRestaurant,setFilterListofRestauarnt]=useState([]);
    const [searchText,setSearchText]=useState("");
    // console.log("body rendered",listofRestaurant);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData=async()=>{
       const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.56405&lng=77.28164&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json)
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListofRestauarnt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterListofRestauarnt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return <h1>You have lost your internet connection, please check your internet</h1>
    const {loggedInUser,setUserName}=useContext(UserContext);
    // console.log(listofRestaurant)
    return listofRestaurant.length===0?<Shimmer/>: (
        <div className="body">
            <div className="flex">
                <div className="p-4 m-4 items-center">
                    <input type="text" className=" border border-solid border-black " onChange={(e)=>{
                        setSearchText(e.target.value)
                        // console.log(searchText)
                    }} value={searchText}/>
                    <button onClick={()=>{
                       const filterdList=listofRestaurant.filter((res)=>{
                       return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                       setFilterListofRestauarnt(filterdList);
                    }} className="px-4 py-2 bg-green-100 rounded-lg m-4" >search</button>
                </div>
                <div className="p-4 m-4">
                <button className="px-4 py-2 bg-gray-100 rounded-lg m-4"  onClick={()=>{
                setFilterListofRestauarnt(listofRestaurant.filter(res=>res.info.avgRating>4));
            }}>Top rated restaurants</button>
                </div>
                <div className="p-4 m-4 items-center">
                    <label className="p-2 m-2">User Name:</label>
                    <input type="text" className=" border border-solid border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
                
            </div>
            <div className="flex flex-wrap">
            {
                filterListofRestaurant.map(restaurant=><Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
            }
            </div>

        </div>
    )
}
export default Body;