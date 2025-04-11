import axios from 'axios'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { DEFAULT_USER_IMAGE } from '../utils/constants'

const Profile = () => {
  const userData = useSelector((store)=>store.user)
  if (!userData) return 
  const {firstName,lastName,age,about,photoUrl,skills,gender} =userData
 
  return (
    <div className=' flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
    <figure>
      <img
        src={!photoUrl?photoUrl:DEFAULT_USER_IMAGE}
        alt="profileimg" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName+" "+lastName}</h2>
      <p>Age: {age??age} {gender??gender}</p>
      <p>{about??about}</p>
      <div ><span className='font-bold'>Skills:</span> {skills.join(",")}</div>
      
    </div>
  </div>
  </div>
  )
}

export default Profile