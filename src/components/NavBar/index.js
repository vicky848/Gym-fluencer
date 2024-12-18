import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export const NavBar = () => {
  return (
    <nav className='navbar-container'>
        <ul className='navbar-list-container'>
        <p className='list'>GymFluencer</p>
            <Link to = '/' className='link'><li>Home</li></Link>
            <Link to = '/service' className='link'><li>Service</li></Link>
            <Link to = '/contact' className='link'><li>Contact</li></Link>
            <Link to = '/about' className='link'><li>About Us</li></Link>
            <Link  to= '/plans' className='link'><li>Membership Plan</li></Link>
            <Link to='/blog' className='link'><li>Blog</li></Link>
            <Link to='/faq' className='link'><li>FAQ</li></Link>
            <Link to='/notfound' className='link'><li>NotFound</li></Link>
            <div className='button-container'>
            
            <button className='navbar-button'>Sign Up</button>
            <button className='navbar-button'>Login</button>
        </div>

        </ul>
      

    </nav>
  )
}
export default NavBar
