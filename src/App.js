import './styles/App.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {AuthContext} from './context/context'
import {useEffect, useState} from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      isLoading
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
