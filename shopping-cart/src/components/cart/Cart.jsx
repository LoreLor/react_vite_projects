import React, { useId } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartIcon, ClearCartIcon } from '../icons/Icons'
import './Cart.css'
import CartItem from './CartItem'

const Cart = () => {
  // para añadir un efecto de mostrar/ocultar
  const cartCheckBoxId = useId(Cart)
  const { cart, clearCart, addToCart, removeFromCart, sustractToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input
        id={cartCheckBoxId}
        type='checkbox'
        hidden
      />
      <aside className='cart'>
        <ul>
          {
          cart?.map((p) => (
            <CartItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              thumbnail={p.thumbnail}
              addToCart={() => addToCart(p)}
              sustractToCart={() => sustractToCart(p)}
              removeFromCart={() => removeFromCart(p)}
              quantity={p.quantity}
            />
          ))
        }
        </ul>
        <div>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  )
}

export default Cart
