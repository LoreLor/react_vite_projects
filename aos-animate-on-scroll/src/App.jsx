import React from 'react'
import './assets/js/script'
import './App.css'
import Header from './components/header/Header'
import WhatWeDo from './components/whatWeDo/WhatWeDo'
import Features from './components/features/Features'
import Portfolio from './components/portfolio/Portfolio'

function App () {
  return (
    <div className='App'>
      <Header />
      <WhatWeDo />
      <Features />
      <Portfolio />
    </div>
  )
}

export default App
