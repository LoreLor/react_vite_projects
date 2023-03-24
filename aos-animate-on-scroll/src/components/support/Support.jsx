import React from 'react'
import image from '../../assets/images/portfolio_img_3.jpg'
import './Support.css'

const Support = () => {
  return (
    <section className='support py-6' id='support'>
      <div className='container'>
        <div className='section-title bg-dark'>
          <h2 className='text-upper text-center text-white'>
            updates & support
          </h2>
        </div>

        <div className='support-content grid py-6 text-center' data-aos='zoom-in' data-aos-duration='3000'>
          <div className='support-content-left'>
            <p className='text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et.</p>
            <p className='text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href='#' className='btn btn-red'>support center</a>

          </div>
          <div className='support-content-right'>
            <img src={image} alt='support_image' className='mx-auto' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Support
