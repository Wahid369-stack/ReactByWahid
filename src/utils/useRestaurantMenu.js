import { useEffect, useState } from "react"

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const fechedData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.56405&lng=77.28164&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await fechedData.json()
        //  console.log(data?.data?.cards[0]?.card?.card?.info);
        setResInfo(json?.data);
        //  console.log(json?.data);
       
    }
    return resInfo;
}
export default useRestaurantMenu;