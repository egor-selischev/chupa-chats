import React, {useContext, useEffect, useState} from 'react'
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import {AuthContext} from "../context/context";
import {Link, useNavigate} from "react-router-dom";
import {loginAPI} from "../http/userAPI";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true)
  const {setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setSelfEmail, test, selfEmail} = useContext(AuthContext)

  const login = async event => {
    try {
      event.preventDefault()
      const response = await loginAPI(email, password)
      setSelfEmail(response.data.email)
      setIsAuth(true)
      navigate("/")
      localStorage.setItem('auth', 'true')
      localStorage.setItem('email', JSON.stringify(response.data.email))
      localStorage.setItem('user', JSON.stringify(test.find(user => user.email === selfEmail)))
      console.log(selfEmail)
      console.log(test)
    } catch (e) {
        alert(e.response.data.message)
    }
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
      <MyInput
        type="email"
        placeholder="Введите ваш email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <MyInput
        type="password"
        placeholder="Введите ваш пароль..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className="Login-links">
        <a href="src/pages/Login#">Забыл пароль</a>
        <Link to="/signup">Зарегистрироваться</Link>
      </div>
      <MyButton>Войти</MyButton>
    </form>
  )
}

export default Login