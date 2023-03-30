import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartPage, CoursesPage, HomePage, SingleCoursePage } from './pages/index'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses/:id' element={<SingleCoursePage />} />
        <Route path='category/:category' element={<CoursesPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
