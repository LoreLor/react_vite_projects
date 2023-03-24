import React from 'react'
import './assets/js/script'
import './App.css'
import Header from './components/header/Header'
import WhatWeDo from './components/whatWeDo/WhatWeDo'
import Features from './components/features/Features'
import Portfolio from './components/portfolio/Portfolio'
import Team from './components/team/Team'
import Support from './components/support/Support'
import Footer from './components/footer/Footer'

/* Import AOS para animar */
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function App () {
  return (
    <div className='App'>
      <Header />
      <WhatWeDo />
      <Features />
      <Portfolio />
      <Team />
      <Support />
      <Footer />
    </div>
  )
}

export default App
