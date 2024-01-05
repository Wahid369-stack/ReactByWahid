import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import("./components/Grocery"));
// console.log(Grocery);

const AppLayout=()=>{
  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Wahidur Rahman"
    }
    setUserName(data.name);
    },[]);
  return (
    
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div className="app"> 
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    
  );
};
const router=createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/grocery",
      element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/cart",
      element:<Cart/>
    },{
      path:"restaurants/:resId",
      element:<RestaurantMenu/>
    }

  ],
  errorElement:<Error/>
},])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);