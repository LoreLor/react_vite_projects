import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'

const CartItemWrapper = styled.div``

const CartItem = ({ cartItem }) => {
  return (
    <CartItemWrapper className='grid'>
      <div className='cart-item-img'>
        <img src={cartItem.image} alt='image' />
      </div>
      <div className='cart-item-info'>
        <p className='fw-7 fs-15'>{cartItem.name}</p>
        <span className='cart-item-creator fs-13 opacity-09'>By {cartItem.creator}</span>
        <div className='fw-7 text-purple'>${cartItem.discounted}</div>
        <div className='cart-item-category bg-orange fs-12 d-inline-block text-capitalize text-white fw-7'>{cartItem.category}</div>
        <br />
        <button type='button' className='remove-btn fs-13 text-dark fw-6'><span><FaTrashAlt /></span></button>
      </div>
    </CartItemWrapper>
  )
}

export default CartItem
