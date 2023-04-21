import React from 'react'

const Profile = ({profiles}) => {
  return (
    <div className="Profile">
      <img src={profiles[0].img}/>
      <div className="Profile-data">
        <h3>{profiles[0].name}</h3>
        <h3>{profiles[0].date}</h3>
      </div>
    </div>
  )
}

export default Profile
