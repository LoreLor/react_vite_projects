import React, { useState } from 'react'
// import images from '../../constants/images'
import './Navbar.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
    // console.log('soy un click', click)
  }

  const close = () => {
    setClick(false)
    // console.log('soy open', click)
  }

  return (
    <nav className='navbar'>
      <div className='container flex navbar-content'>

        <div className='brand-and-toggler flex'>
          <a href='index.html' alt='' className='navbar-brand text-upper fw-7 fs-22 flex'>
            <span className='text-white'>business</span>
            <span>tech</span>
          </a>
          <button
            type='button'
            className='navbar-show-btn text-white'
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 32 }} />
          </button>
        </div>

        <div className={`navbar-collapse flex flex-center ${click ? 'show-navbar' : ''}`}>
          <button
            type='button'
            className='navbar-hide-btn text-white'
            onClick={close}
          >
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: 32 }} />
          </button>

          <ul className='navbar-nav text-upper text-white fw-6 ls-1 fs-20 text-center'>
            <li className='nav-item'>
              <a href='#header' className='nav-link'>home</a>
            </li>
            <li className='nav-item'>
              <a href='#what-we-do' className='nav-link'>what we do</a>
            </li>
            <li className='nav-item'>
              <a href='#features' className='nav-link'>features</a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio' className='nav-link'>projects</a>
            </li>
            <li className='nav-item'>
              <a href='#team' className='nav-link'>team</a>
            </li>
            <li className='nav-item'>
              <a href='#support' className='nav-link'>support</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
