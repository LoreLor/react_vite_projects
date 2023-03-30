import React from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { useCoursesContext } from '../store/context/coursesContext'
import { useSidebarContext } from '../store/context/sidebarContext'

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar{
    transform: translateX(0%);
  }

  .sidebar-close-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .sidebar-close-btn:hover{
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  .sidebar-content{
    margin-top: 50px;
    h6{
      margin-bottom: 16px;
    }
    .sidebar-link-item{
      font-size: 14px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover{
        transform: translateX(6px);
        text-decoration: underline;
      }
    }
  }
`

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarContext()
  const { categories } = useCoursesContext()

  return (
    <SidebarWrapper className={`bg-white ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <button type='button' className='sidebar-close-btn' onClick={() => closeSidebar()}>
        <MdClose />
      </button>
      <div className='sidebar-content'>
        <h6 className='fs-18'>Top Categories</h6>
        <ul className='sidebar-category'>
          {
            categories.map((category, index) => {
              return (
                <div key={index}>
                  <li className='sidebar-link-item fw-5'>
                    <Link to={`/category/${category}`} className='text-uppercase'>{category}</Link>
                  </li>
                </div>
              )
            })
          }
        </ul>
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
