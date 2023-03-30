import React from 'react'
import styled from 'styled-components'
import { useCoursesContext } from '../store/context/coursesContext'
import Tab from './Tab'

const CourseListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
    
  }
`

const CourseList = () => {
  const { courses } = useCoursesContext()

  return (
    <CourseListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <h2>A broad selection of courses</h2>
          <p>Choose from 204,000 online video courses with new additions publihsed every month</p>
        </div>

        <Tab courses={courses} />
      </div>
    </CourseListWrapper>
  )
}

export default CourseList
