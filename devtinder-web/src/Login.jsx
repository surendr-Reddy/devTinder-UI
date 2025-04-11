import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addProfileUser} from "./utils/profileSlice"
import { useNavigate } from "react-router";
import { BASEURL } from "./utils/constants";


const Login = () => {
  const [password, setPassword] = useState("Sure@1234");
  const [emailId, setEmailId] = useState("babu.reddy@gmail.com");

  const dispatch=useDispatch();
  const navigate = useNavigate();
  const userData= useSelector((store)=>store.user)

  
  const handelSubmit = async () => {
    try {
      
      const response = await axios.post(
        BASEURL+"/login",
        { emailId, password },
        { withCredentials: true }
      );
   
      dispatch(addProfileUser(response.data))
      return navigate('/feed')
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-300  w-96">
        <div className="card-body">
          <h2 className="card-title">Login Page</h2>
          <div>
            <label className="input validator ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter Mail Id"
                required
              />
            </label>
            <div className="validator-hint hidden my-2">
              Enter valid email address
            </div>
            <label className="input validator my-4">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </label>
          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handelSubmit}>
              Login Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
