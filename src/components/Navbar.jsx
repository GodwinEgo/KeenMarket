import React from 'react'
import './Navbar.css'
import logo from '../assets/Keen Marketers/Logo Used/SVG/MArketing Logo.svg';

const Navbar = () =>
{
  return (
    <nav>
      <div className="brand">
        <img src={ logo } alt="logo" />
        <h1>Keen Marketers</h1>
      </div>
    </nav>
  )
}

export default Navbar
