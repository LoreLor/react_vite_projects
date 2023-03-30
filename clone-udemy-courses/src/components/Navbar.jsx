import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdMenu, MdShoppingCart } from 'react-icons/md'
import { useSidebarContext } from '../store/context/sidebarContext'
import { useCartContext } from '../store/context/cartContext'

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-violet);
      font-size: 4rem;
      font-weight: 800;
    }
  }

  .cart-btn{
    margin-right:18px;
    font-size: 2.8rem;
    position:relative;
    .item-count-badge{
      background-color: var(--clr-violet);
      position: absolute;
      right:-10px;
      top: -10px;
      font-size:1.6rem;
      font-weight: 700;
      display: block;
      width: 23px;
      height:23px;
      color: var(--clr-black);
      display: flex;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    transition: all 3s ease-in-out;
    &:hover{
      opacity:0.5;
      color: var(--clr-violet);
    }
  }

`

const Navbar = () => {
  const { openSidebar } = useSidebarContext()
  const { totalItems } = useCartContext()

  return (
    <NavbarWrapper className='bg-white flex'>
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to='/' className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>c</span>ourses
          </Link>

          <div className='navbar-btns flex'>
            <Link to='/cart' className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{totalItems}</span>
            </Link>
            <button
              type='button'
              onClick={openSidebar}
              className='sidebar-open-btn'
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
