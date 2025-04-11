import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProfileUser, removeProfileUser } from "./utils/profileSlice";

import Cookies from "js-cookie"

const Body = () => {
  const userData =useSelector((store)=>store.user)
  console.log(userData);
  
  const dispatch =useDispatch()
  const navigate =useNavigate();
   const token =Cookies.get("token")

  
  useEffect(()=>{if (!token && !userData){
    dispatch(removeProfileUser())
    navigate("/login")
     }},[userData,navigate])

  // 2nd way -- alredy token validation is take care from backend so we can simply call the api

  // const fetchUser= async()=>{
  //   try {const userApi= await axios.get("http://localhost:7777/profile/getProfile",{withCredentials:true})
  //   dispatch(addProfileUser(userApi.data.data.userDetails))
    
  // } 
  //   catch(err) {
  //     navigate("/login")
  //   }


  // }
  // useEffect(()=>{if(!userData){fetchUser()}},[navigate])
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Body;
