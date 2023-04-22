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
  const users = allUsersAPI()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      selfEmail,
      setSelfEmail,
      users
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
