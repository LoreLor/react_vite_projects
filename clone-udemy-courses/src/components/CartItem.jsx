import React from 'react'

const CartItem = ({ cartItem }) => {
  return (
    <>

      <div>Course id: {cartItem.id} - creator: {cartItem.creator}</div>
      <img src={cartItem.image} alt={cartItem.name} />
    </>
  )
}

export default CartItem
