import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProfileUser, removeProfileUser } from "../utils/profileSlice";

import Cookies from "js-cookie"
import { BASEURL } from "../utils/constants";

const Body = () => {
  const [loading, setLoading] = useState(true);
  const userData =useSelector((store)=>store.user)

  
  const dispatch =useDispatch()
  const navigate =useNavigate();
    const token =Cookies.get("token")

  
  // useEffect(()=>{if (!token || !userData){
  //   dispatch(removeProfileUser())
  //   navigate("/login")
  //    }},[userData,navigate])

  // 2nd way -- alredy token validation is take care from backend so we can simply call the api

  const fetchUser= async()=>{
    try {

      if (!token) {
        navigate("/login");
        return;
      }
      
      if(!userData){
      const response= await axios.get(BASEURL+"/profile/getProfile",{withCredentials:true})
      const userDetails = response?.data?.data?.userDetails;
          if (userDetails) {
            dispatch(addProfileUser(userDetails));
          }
      }
      
    }
    catch(err) {
      navigate("/login")
    } finally{
      setLoading(false)
    }


  }
  useEffect(()=>{  fetchUser()},[navigate,token,userData])

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Body;
