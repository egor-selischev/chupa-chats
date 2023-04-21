import React from 'react'
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {Link} from "react-router-dom";

const SingUp = () => {
  const today = new Date().toISOString().slice(0, 10)

  return (
    <form className="Login-form">
      <span className="h2">
        <Link to="/login" className="Link-to-login">
          <svg width="12" height="26" viewBox="0 0 12 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5595 0.545486C11.6991 0.717961 11.8099 0.922855 11.8855 1.14843C11.9611 1.37401 12 1.61583 12 1.86006C12 2.10428 11.9611 2.34611 11.8855 2.57168C11.8099 2.79726 11.6991 3.00215 11.5595 3.17463L3.62206 13.0005L11.5595 22.8263C11.6989 22.999 11.8095 23.2039 11.8849 23.4295C11.9604 23.655 11.9992 23.8968 11.9992 24.1409C11.9992 24.3851 11.9604 24.6268 11.8849 24.8524C11.8095 25.0779 11.6989 25.2829 11.5595 25.4555C11.4201 25.6281 11.2546 25.7651 11.0725 25.8585C10.8903 25.9519 10.6951 26 10.498 26C10.3008 26 10.1056 25.9519 9.9235 25.8585C9.74136 25.7651 9.57587 25.6281 9.43646 25.4555L0.440484 14.3151C0.300857 14.1426 0.190079 13.9377 0.114493 13.7121C0.0389078 13.4865 0 13.2447 0 13.0005C0 12.7563 0.0389078 12.5144 0.114493 12.2889C0.190079 12.0633 0.300857 11.8584 0.440484 11.6859L9.43646 0.545486C9.57574 0.372575 9.74119 0.235389 9.92335 0.141785C10.1055 0.0481818 10.3008 0 10.498 0C10.6952 0 10.8905 0.0481818 11.0726 0.141785C11.2548 0.235389 11.4202 0.372575 11.5595 0.545486Z" fill="#8B94D9"/>
          </svg>
        </Link>
        Регистрация
      </span>
      <MyInput type="text" placeholder="Имя..."/>
      <MyInput type="text" placeholder="Фамилия..."/>
      <MyInput type="email" placeholder="Email..."/>
      <MyInput type="password" placeholder="Пароль..."/>
      <MyInput type="date" min="1900-01-01" max={today} />
      <fieldset>
        <legend>Пол:</legend>
          <div style={{paddingBottom: '5px'}}>
            <MyInput type="radio" id="male" name="gender" value="male" checked/>
            <label htmlFor="male">Мужской</label>
            <MyInput type="radio" id="female" name="gender" value="female"/>
            <label htmlFor="female">Женский</label>
          </div>
      </fieldset>
      <MyButton>Зарегистрироваться</MyButton>
    </form>
  )
}

export default SingUp