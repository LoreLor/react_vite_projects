import React from 'react'
import { portfolio } from '../../constants/data'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio py-6' id='portfolio'>
      <div className='container'>
        <div className='section-title bg-dark'>
          <h2 className='text-upper text-white text-center'>
            our portfolio
          </h2>
        </div>

        <div className='portfolio-content grid py-6'>
          {
            portfolio?.map((port) => {
              const { id, title, text, image } = port
              return (
                <div className='portfolio-item grid text-center' key={id} data-aos='fade-down' data-aos-duration='3000'>
                  <div className='portfolio-item-rigth'>
                    <img src={image} alt='' className='mx-auto' />
                  </div>
                  <div className='portfolio-item-left'>
                    <h3 className='text-upper fs-22'>{title}</h3>
                    <p className='text mx-auto'>{text}</p>
                    <a href='#' className='btn btn-dark'>view demo</a>
                  </div>
                </div>
              )
            })
        }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
