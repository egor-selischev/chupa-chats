import React from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Messenger = () => {
  return (
    <div className="Messenger">
      <Sidebar/>
      <Chat/>
    </div>
  )
}

export default Messenger
