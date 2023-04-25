import React, {useState} from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Messenger = () => {
  const [activeContact, setActiveContact] = useState({})
  console.log(activeContact)
  return (
    <div className="Messenger">
      <Sidebar setActiveContact={setActiveContact}/>
      <Chat activeContact={activeContact}/>
    </div>
  )
}

export default Messenger
