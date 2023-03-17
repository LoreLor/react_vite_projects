import React from 'react'

const CartItem = ({ thumbnail, title, price, quantity, addToCart, removeFromCart, sustractToCart }) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <br />
        <button onClick={addToCart}>➕</button>
        <button onClick={sustractToCart}>➖</button>
        <button onClick={removeFromCart}>🗑️</button>
      </footer>
    </li>
  )
}

export default CartItem
