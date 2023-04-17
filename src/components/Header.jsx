import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import Wavy from './Wavy'

const Header = () =>
{
  return (
    <div>
      <div className="background">
        <Navbar />
        <Wavy />
      </div>
    </div>
  )
}

export default Header
