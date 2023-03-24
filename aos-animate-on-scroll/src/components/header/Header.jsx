import React from 'react'
import Navbar from '../navbar/Navbar'
import images from '../../constants/images'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header flex' id='header'>
      <Navbar />
      <div className='container'>
        <div className='header-content grid text-center py-6 text-white'>
          <div className='header-content-left' data-aos='zoom-in-right' data-aos-duration='3000'>
            <h1 className='text-upper header-title'>business-tech app development</h1>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href='#' className='btn btn-dark'>
              <span>view more</span> <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
          <div className='header-content-right' data-aos='zoom-in-left' data-aos-duration='3000'>
            <img src={images.header} alt='header_devices' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
