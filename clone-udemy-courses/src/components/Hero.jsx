import React from 'react'
import styled from 'styled-components'
import { otherImg } from '../utils/images'

const HeroWrapper = styled.div`
background: url(${otherImg.heroImg}) center/cover no-repeat;
height: 300px;

.container{
  .hero-content{
    max-width: 400px;
    width:100%;
    margin-left: 0;
    padding: 20px;

    h1{
      font-size: 32px;
      margin-bottom: 5px;
      white-space: nowrap;
    }

    p{
      font-size: 15px;
    }
  }
}

`

const Hero = () => {
  return (
    <HeroWrapper className='bg-dark'>
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Save big. Learn big.</h1>
          <p>Shop our big sale for courses from $9.99. If you wnat to learn it, chances are we've got it. Ends Aug. 31.</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default Hero
