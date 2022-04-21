import React from 'react'
import SideNav from "../components/SideNav";
import HomeHeader from "../components/HomeHeader";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import {setUserID} from '../state/actions/userIDAction'
import Header from '../components/Header';
import {setUser} from '../state/actions/user'



function Access() {

  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token)
  const userID = useSelector((state)=>state.userID);
  useEffect(() => {
    if(loading){
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(process.env.React_App_API + "user/auth", {}, config)
      .then((res) => {
        sessionStorage.setItem("userID", res.data.id);
        dispatch(setUserID(res.data.id));
        setLoading(false);
      });
    }
    if(userID != null){
      axios
      .get(process.env.React_App_API + "user/get/"+userID)
      .then((res) => {
        dispatch(setUser(res.data.user));
      })
    }

  },[loading]);
  
  return (
   <>
     <Header/>
     <SideNav />
   </>
  )
}

export default Access