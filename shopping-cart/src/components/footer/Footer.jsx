import React from 'react'
// import { useCart } from '../../hooks/useCart'
// import { useFilters } from '../../hooks/useFilters'

import './Footer.css'

const Footer = () => {
  // const { filters } = useFilters()
  // const { cart } = useCart()
  const data = new Date().getFullYear()

  return (
    <footer className='footer'>
      <span>Practica React 💻 _ <span>@LoreLor - {data}</span></span>
      {/* <h5>Shopping Cart with useContext & useReducer</h5> */}
      {/* <div style={{ width: '100px', height: 'auto' }}>
        <span>
          {JSON.stringify(filters)}
          <br />
          {JSON.stringify(cart)}
        </span>
      </div> */}
    </footer>
  )
}

export default Footer
