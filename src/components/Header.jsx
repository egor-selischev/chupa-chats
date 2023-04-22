import React, {useContext} from 'react'
import MyButton from "./UI/button/MyButton";
import {AuthContext} from "../context/context";

const Header = () => {
  const {setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('token')
  }

  return (
    <header className="App-header">
      <div className="App-name">
        <span></span>
        <p>CHUPA-CHATS</p>
      </div>
      <MyButton onClick={logout}>Выход</MyButton>
    </header>
  )
}

export default Header