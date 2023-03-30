import React from 'react'
import CategoriesList from '../components/CategoriesList'
import CourseList from '../components/CourseList'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CourseList />
      <CategoriesList />
    </div>
  )
}

export default HomePage
