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
      <ul className="navigation">
        <li><a className='active' href='/'>Home</a></li>
        <li><a href='/'>Service</a></li>
        <li><a href='/'>Portfolio</a></li>
        <li><a href='/'>Blog</a></li>
        <li><a href='/'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
