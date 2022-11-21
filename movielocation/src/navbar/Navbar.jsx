import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
    <div className='navbar'>
          <Link to="/signup">Register</Link>
          <Link to="/Login">Login</Link>
                
        </div>
  )
}
