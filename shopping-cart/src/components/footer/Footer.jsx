import React from 'react'
import './Footer.css'

const Footer = ({ filter }) => {
  return (
    <footer className='footer'>
      <h4>Practica React 💻 - <span>@LoreLor</span></h4>
      {/* <h5>Shopping Cart with useContext & useReducer</h5> */}
      <span>{JSON.stringify(filter)}</span>
    </footer>
  )
}

export default Footer
