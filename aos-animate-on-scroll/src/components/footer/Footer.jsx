import React, { useEffect, useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from './animatedLetters/AnimatedLetters'

const Footer = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  /* habria que llevar a utils */
  const array = ['Basic-Info', 'Map', 'Contact-Form']
  const strArra = array.map((string) => {
    return string.split('')
  })

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3500)
    return (
      setLetterClass('')
    )
  }, [])

  return (
    <section className='footer py-6 bg-dark text-white' id='footer'>
      <div className='container'>
        <div className='footer-content grid text-center'>
          <div className='footer-item-group grid'>
            <div className='footer-item'>
              <h3 className='footer-item-title text-upper'>
                portfolio
              </h3>
              <ul className='footer-item-links'>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['W', 'e', 'b', '-', 'D', 'e', 's', 'i', 'g', 'n']}
                      idx={20}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['B', 'r', 'a', 'n', 'd', 'i', 'n', 'g']}
                      idx={15}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['M', 'o', 'b', 'i', 'l', 'e', '-', 'D', 'e', 's', 'i', 'g', 'n']}
                      idx={23}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['G', 'r', 'a', 'p', 'h', 'i', 'c', '-', 'D', 'e', 's', 'i', 'g', 'n']}
                      idx={26}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['M', 'e', 'd', 'i', 'a', '-', 'B', 'u', 'y', 'i', 'n', 'g']}
                      idx={22}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <h3 className='footer-item-title text-upper'>
                about
              </h3>
              <ul className='footer-item-links'>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['T', 'h', 'e', '-', 'C', 'o', 'm', 'p', 'a', 'n', 'y']}
                      idx={21}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['V', 'i', 's', 'i', 'o', 'n']}
                      idx={11}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['M', 'i', 's', 'i', 'o', 'n']}
                      idx={11}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <h3 className='footer-item-title text-upper'>
                gallery
              </h3>
              <ul className='footer-item-links'>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['F', 'l', 'i', 'c', 'k', 'e', 'r']}
                      idx={13}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['P', 'i', 'c', 'a', 's', 'a']}
                      idx={11}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['i', 'S', 't', 'o', 'c', 'k', 'P', 'h', 'o', 't', 'o']}
                      idx={13}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={['P', 'h', 'o', 't', 'o', 'D', 'u', 'n', 'e']}
                      idx={13}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <h3 className='footer-item-title text-upper'>
                contact
              </h3>
              <ul className='footer-item-links'>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={strArra[0]}
                      idx={13}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={strArra[1]}
                      idx={13}
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={strArra[2]}
                      idx={13}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-social-icons flex flex-center'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='bg-red flex flex-center'>
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='bg-red flex flex-center'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='bg-red flex flex-center'>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='bg-red flex flex-center'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <div className='footer-bottom-text'>
            <p className='text fs-16'> Copyright ©️ {new Date().getFullYear()} Lorena De Armas. All rights reserved.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
