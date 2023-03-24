import React from 'react'
// import images from '../../constants/images'
import { services } from '../../constants/data'
import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <section className='what-we-do py-6' id='what-we-do'>
      <div className='container'>
        <div className='section-title bg-dark'>
          <h2 className='text-upper text-white text-center'>
            what we do
          </h2>
        </div>
        <div className='what-we-do-content'>

          {
            services?.map((service) => {
              const { id, image, title, text } = service
              return (
                <div className='what-we-do-item grid text-center' key={id}>
                  <div className='what-we-do-item-left' data-aos='zoom-in-right' data-aos-duration='3000'>
                    <img src={image} alt='' className='mx-auto' />
                  </div>
                  <div className='what-we-do-item-right' data-aos='zoom-in-left' data-aos-duration='3000'>
                    <h4 className='text-upper fs-20'>{title}</h4>
                    <p className='text mx-auto'>{text}</p>
                    <a href='#' className='btn btn-red'>view more</a>
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

export default WhatWeDo
