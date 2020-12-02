import React from 'react'
import '../styles/components/Header.sass'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="Header">
      <div className="Header__logo">
        <Link to="/">
          <h1>Clever Test</h1>
        </Link>
      </div>
      <div className="Header__routes">
        <ul>
          <li>
            <Link to="/test1">Ejercicio #1</Link>
          </li>
          <li>
            <Link to="/test2">Ejercicio #2</Link>
          </li>
          <li>
            <Link to="/test3">Ejercicio #3</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
