import React, { useContext, useEffect, useReducer } from 'react'
import { GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE } from '../actions'
import coursesReducer from '../reducers/coursesReducer'
import courses from '../../utils/data'

// estado inicial
const initialState = {
  courses: [],
  categories: [],
  singleCourse: {}
}

// me genero el contexto
const CoursesContext = React.createContext()

// proveo el contexto
export const CoursesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coursesReducer, initialState)

  const getCourses = () => {
    dispatch({
      type: GET_COURSES,
      payload: courses
    })
    console.log('courses', courses)
  }

  const getSingleCourse = (id) => {
    const singleCourse = courses.find(course => course.id === id)
    dispatch({
      type: GET_SINGLE_COURSE,
      payload: singleCourse
    })
  }

  const getCategories = () => {
    // para que mapee y no me traiga datos repetidos
    const categories = [...new Set(courses.map(item => item.category))]
    dispatch({
      type: GET_CATEGORIES,
      payload: categories
    })
    console.log('categories', categories)
  }

  useEffect(() => {
    getCourses()
    getCategories()
  }, [])

  return (
    <CoursesContext.Provider value={{
      ...state,
      getCourses,
      getCategories,
      getSingleCourse
    }}
    >
      {children}
    </CoursesContext.Provider>
  )
}

// me cero el hook
export const useCoursesContext = () => {
  return useContext(CoursesContext)
}
