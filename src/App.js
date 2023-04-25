import './styles/App.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {AuthContext} from './context/context'
import {useEffect, useState} from "react";
import {allUsersAPI} from "./http/userAPI";



function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selfEmail, setSelfEmail] = useState('')
  const [user, setUser] = useState({})
  const [test, setTest] = useState(new Array({id:1,name:"Кирилл Пятышев",age:21,birthday:"2001-05-20",phoneNumber:"89999999999",email:"test@mail.ru",gender:"M"}))
  const getEmail = () => {
    const email = localStorage.getItem('email');
    if (email) {
      setSelfEmail(JSON.parse(email));
    }
  }

  const getUser = () => {
    const user = localStorage.getItem('user')
    try {
      if (user) {
        setUser(JSON.parse(user))
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    const resUsers = allUsersAPI()
    resUsers.then(resUsers => {
      const data = resUsers
      console.log(data)
      setTest(data)
    })
    getUser()
    getEmail()
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      selfEmail,
      setSelfEmail,
      test,
      setTest,
      user
    }}>
      <Header/>
      <div className="Container">
        <Navbar/>
        <AppRouter/>
      </div>
    </AuthContext.Provider>
  )
}

export default App
