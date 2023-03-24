import React from 'react'
import { team } from '../../constants/data'
import './Team.css'

const Team = () => {
  return (
    <section className='team py-6 bg-red' id='team'>
      <div className='container'>
        <div className='section-title bg-dark'>
          <h2 className='text-upper text-white text-center'>
            our team
          </h2>
        </div>

        <div className='team-content py-6 grid'>
          {
                team.map((t) => {
                  const { id, name, image, text } = t
                  return (
                    <div className='team-item text-center text-white' key={id} data-aos='zoom-in' data-aos-duration='3000'>
                      <img src={image} alt={name} className='mx-auto' />
                      <p className='text-upper fw-7'>{name}</p>
                      <span className='text-upper'>{text}</span>
                    </div>
                  )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Team
