import axios from 'axios'
import React from 'react'
import { X, Check } from "lucide-react";

import { DEFAULT_USER_IMAGE } from '../utils/constants'
import { useNavigate } from 'react-router'

const Profile = (props) => {
  const {userData={},isEdit=false, isFeed=false} =props
  
  const navigate=useNavigate();
  if (!userData) return 
  const {firstName,lastName,age,about,photoUrl,skills,gender} =userData
 
  return (
    <div className=' flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
    <figure>
      <img
        src={photoUrl.length>0?photoUrl:DEFAULT_USER_IMAGE}
        alt="profileimg" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName+" "+lastName}</h2>
      <p>Age: {age??age} {gender??gender}</p>
      <p>{about??about}</p>
      <div ><span className='font-bold'>Skills:</span> {skills.join(",")}</div>
    {isEdit?<div className='flex  justify-end mt-4'>
      <button onClick={()=>{navigate("/profile/edit")}} className='btn  btn-primary '>Edit Profile  </button>
    </div>:null}
    {isFeed?
    <div className="flex justify-between items-center gap-4 mt-4 px-4">
  <button className="btn btn-circle btn-error shadow-lg hover:scale-110 transition">
    <X size={24} />
  </button>

  <button className="btn btn-circle btn-success shadow-lg hover:scale-110 transition">
    <Check size={24} />
  </button>
</div>:null}
    </div>
  </div>
  </div>
  )
}
// old way
Profile.defaultProps = {
userData:{},
isEdit:false,
isFeed:false
}
export default Profile