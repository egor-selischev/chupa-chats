import React, {useContext, useEffect, useMemo, useState} from 'react'
import {AuthContext} from "../context/context";
import Loader from "../components/UI/loader/Loader";
import {allUsersAPI} from "../http/userAPI";

const Profile = ({profiles}) => {
  const {test, isLoading, user, setTest} = useContext(AuthContext)

  console.log(test)
  console.log(user)

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <div className="Profile">
      <img src={profiles[0].img}/>
      <div className="Profile-data">
        <h3>{user.name}</h3>
        <h3>{user.birthday}</h3>
      </div>
    </div>
  )
}

export default Profile
