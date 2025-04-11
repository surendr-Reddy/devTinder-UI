import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASEURL } from "../utils/constants";
import { removeProfileUser } from "../utils/profileSlice";
import Cookies from "js-cookie";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const userData = useSelector((store) => {
    return store.user;
  });

  const handlerLogout = async()=>{
    try {
      console.log("hi");
      
      //logout ~i axios post and get
      const res= await axios.get(BASEURL+"/logout" ,{withCredentials:true})
    if(res?.request?.status===201){
      dispatch(removeProfileUser())
    } else{
      Cookies.remove("token"); 
    }
    navigate("/login")
    } catch (error) {
      console.error("Logout failed", error);
      
    }
   }

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to ="/feed" className="btn btn-ghost text-xl">devTinder</Link>
        </div>
        <div className="flex gap-2 items-center ">
          <div> {userData?<p> Welcome {userData?.firstName} {userData?.lastName}</p>:null}</div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mx-4"
            >
              <div className="w-10 rounded-full">
                {userData?.photoUrl ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="data:image/png;base64,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"
                  />
                ) : null}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handlerLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
