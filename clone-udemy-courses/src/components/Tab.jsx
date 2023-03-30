import React, { useState } from 'react'
import styled from 'styled-components'
import { useCoursesContext } from '../store/context/coursesContext'
import Course from './Course'

const TabWrapped = styled.div`
  .tab{
    margin-top: 16px;
    .tab-head-item button{
      border: 1px solid var(--clr-violet);
      padding: 0.5rem 0.8rem;
      margin-right: 0.6rem;
      transition: var(--transition);

      &:hover{
        background-color: var(--clr-black);
        border: 1px solid var(--clr-black);
        color: var(--clr-white);
        transform: scale(0.85);
      }
    }

    .tab-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 756px){
      .tab-body{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
    }

    @media screen and (min-width: 992px){
      .tab-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      tab-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
  `

const Tab = () => {
  const { categories, courses } = useCoursesContext()

  const [activeTab, setActiveTab] = useState('')

  const handleClick = (category) => {
    setActiveTab(category)
    console.log(activeTab)
  }

  const courseFiltered = courses.filter(course => course.category === activeTab)

  return (
    <TabWrapped>
      <div className='tab'>
        <ul className='flex flex-wrap'>
          {
          categories.map((category, index) => {
            return (
              <div key={index}>
                <li className='tab-head-item'>
                  <button
                    type='button'
                    onClick={() => handleClick(category)}
                    className='tab-btn text-capitalize fs-15 fw-5'
                  >
                    {category}
                  </button>
                </li>
              </div>
            )
          })
        }
        </ul>

        <div className='tab-body'>
          {
            courseFiltered.map((course) => {
              return (
                <Course key={course.id} {...course} />
              )
            })
          }
        </div>
      </div>
    </TabWrapped>
  )
}

export default Tab
