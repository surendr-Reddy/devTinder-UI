import React, { useEffect } from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'

function Feed() {

  const userData = useSelector((store)=>store.user)

    useEffect(()=>{

        
    },[])

  return (
    <div>
      <Profile userData={userData} isFeed={true}/>
    </div>
  )
}

export default Feed
