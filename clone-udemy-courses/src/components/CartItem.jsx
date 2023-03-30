import React from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { useCartContext } from '../store/context/cartContext'

const CartItemWrapper = styled.div`
  grid-template-columns: 110px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;

  .cart-item-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    padding-top: 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cart-item-info{
    margin-left: 20px;
  }

  .cart-item-category {
    padding: 0px 10px;
    border-radius: 6px;
  }

  .remove-btn {
    margin-top: 16px;
    transition: var(--transition);

    &:hover {
      color: var(--clr-pink);
    }
  }

  .remove-btn-icon {
    margin-left: 8px;
  }

`

const CartItem = ({ cartItem }) => {
  const { removeItemCart } = useCartContext()

  return (
    <CartItemWrapper className='grid'>
      <div className='cart-item-img'>
        <img src={cartItem.image} alt='image' />
      </div>
      <div className='cart-item-info'>
        <p className='fw-7 fs-15'>{cartItem.name}</p>
        <span className='cart-item-creator fs-13 opacity-09'>By {cartItem.creator}</span>
        <div className='fw-7 text-purple'>$ {cartItem.discounted}</div>
        <div className='cart-item-category bg-violet fs-13 d-inline-block text-capitalize text-black fw-7'>{cartItem.category}</div>
        <br />
        <button type='button' className='remove-btn fs-13 text-dark fw-8' onClick={() => removeItemCart(cartItem.id)}>
          Remove
          <span className='remove-btn-icon'><FaTrashAlt /></span>
        </button>
      </div>
    </CartItemWrapper>
  )
}

export default CartItem
