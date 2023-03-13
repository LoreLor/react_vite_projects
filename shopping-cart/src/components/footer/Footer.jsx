import React from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Footer.css'

const Footer = () => {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      <h4>Practica React 💻 - <span>@LoreLor</span></h4>
      {/* <h5>Shopping Cart with useContext & useReducer</h5> */}
      <span>{JSON.stringify(filters)}</span>
    </footer>
  )
}

export default Footer
