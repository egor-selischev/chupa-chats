import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import {AuthContext} from "../context/context";
import Loader from "./UI/loader/Loader";
import PrivateRoute from "./PrivateRoute";
import Messenger from "../pages/Messenger";
import SingUp from "../pages/SingUp";
import Settings from "../pages/Settings";

const AppRouter = () => {
  const {isLoading, test} = useContext(AuthContext)
  const profiles = [
    {img: 'https://i.pinimg.com/originals/69/2e/64/692e6421912e29184674dd58ef9f5e18.jpg', name: 'Котик Обыкновенный', date: '19.11.2001'}
  ]

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/" element={<Profile profiles={profiles}/>} />
        <Route path="/messages" element={<Messenger/>} />
        <Route path="/settings" element={<Settings/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SingUp/>} />
    </Routes>
  )
}

export default AppRouter