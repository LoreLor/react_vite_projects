import React from 'react'
import { features } from '../../constants/data'
import './Features.css'

const Features = () => {
  return (
    <section className='features py-6' id='features'>
      <div className='container'>
        <div className='section-title bg-dark'>
          <h2 className='text-upper text-white text-center'>
            our features
          </h2>
        </div>

        <div className='features-content grid py-6'>
          {
                features?.map((feature) => {
                  const { id, icon, title, text } = feature
                  return (
                    <div className='features-item text-center' id={title} key={id} data-aos='zoom-out' data-aos-duration='3000'>
                      <div className='feature-item-icon'>
                        <div className='mx-auto'>{icon}</div><br />
                      </div>
                      <div className='features-item-text'>
                        <h2>{title}</h2>
                        <p className='text mx-auto'>{text}</p>
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

export default Features
