import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ol className="Side-bar-ol">
        <li id="L_pr" className="Left-menu-item">
          <Link to="/" className="Link-logo-prof Left-menu-link">Профиль</Link>
        </li>
        <li id="L_ms" className="Left-menu-item">
          <Link to="/messages" className="Link-logo-mesg Left-menu-link">Сообщения</Link>
        </li>
        <li id="L_st" className="Left-menu-item">
          <Link to="/settings" className="Link-logo-sett Left-menu-link">Настройки</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navbar
