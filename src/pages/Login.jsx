import React, {useContext, useEffect, useState} from 'react'
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import {AuthContext} from "../context/context";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true)
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()

  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    navigate("/")
    localStorage.setItem('auth', 'true')
  }

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <Loader/>
    )
  }

  return (
    <form className="Login-form" onSubmit={login}>
      <span className="h2">Вход</span>
      <MyInput type="email" placeholder="Введите ваш email..."/>
      <MyInput type="password" placeholder="Введите ваш пароль..."/>
      <div className="Login-links">
        <a href="src/pages/Login#">Забыл пароль</a>
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
      <MyButton>Войти</MyButton>
    </form>
  )
}

export default Login