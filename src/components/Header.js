import { useState ,useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btn, setBtn] =useState("login");
    const onlineStatus=useOnlineStatus();
    const data=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items)
    // console.log(cartItems);
    return <div className="flex justify-between bg-green-100 shadow-lg">
         <div className="logo-container">
             <img className="w-40" src={LOGO_URL}/>       
         </div> 
         <div className="flex items-center">
             <ul className="flex p-4 m-4">
                <li className="px-4">Online status:{onlineStatus===true?"🟢":"🔴"}</li>
                 <li className="px-4"><Link to="/">Home</Link></li>
                 <li className="px-4"><Link to="/about">About Us</Link> </li>
                 <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                 <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                 <li className="px-4 font-bold"><Link to="/cart">cart({cartItems.length}-items)</Link></li>
                 <button className="login" onClick={()=>{
                    const changeBtn=btn=="login"?"logout":"login";
                    setBtn(changeBtn)}}>{btn}</button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                    
             </ul>
             
         </div>
 
   
     </div>
 }
 export default Header;