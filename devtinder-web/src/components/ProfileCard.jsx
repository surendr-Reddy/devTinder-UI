import React from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
    const userData= useSelector( store=>store.user)
  return (
    <div>
      <Profile  userData={userData} isEdit = {true} />
    </div>
  )
}

export default ProfileCard
