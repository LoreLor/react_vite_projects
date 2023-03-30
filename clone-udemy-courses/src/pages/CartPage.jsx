import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../store/context/cartContext'
import { BsTrash } from 'react-icons/bs'
import CartItem from '../components/CartItem'

const CartWrapper = styled.div`
`

const NotFoundWrapper = styled.div`
padding: 30px 0;
font-weight: 600;

`

const CartPage = () => {
  const { cart: cartItems, totalItems, totalAmount } = useCartContext()

  return (
    <>
      {
        cartItems.length < 1
          ? (
            <NotFoundWrapper>
              <div className='container'>
                No items found in the cart.
              </div>
            </NotFoundWrapper>
            )
          : (
            <CartWrapper>
              <div className='container'>
                <div className='cart-pg-title'>
                  <h3>Shopping Cart</h3>
                </div>
                <div className='cart-grid grid'>
                  {/* card grid */}
                  <div className='cart-grid-left'>
                    <div className='flex flex-wrap flex-between'>
                      <div className='cart-count-info'>
                        <span className='fw-6 fs-16'>
                          {totalItems > 1 ? `Courses in cart: ${totalItems}` : `Course in cart: ${totalItems}`}
                        </span>
                      </div>
                      <button type='button' className='cart-clear-btn flex fs-15 fw-6 text'>
                        <span className='d-inline-block text-pink'>Clear All</span>
                        <BsTrash className='text-pink' />
                      </button>
                    </div>

                    <div className='cart-items-list grid'>
                      {
                        cartItems.map(item => {
                          return (
                            <CartItem key={item.id} cartItem={item} />
                          )
                        })
                      }
                    </div>
                  </div>
                  {/* *end of grid left */}
                  {/** cart grid right */}
                  <div className='cart-grid-right'>
                    <div className='cart-total'>
                      <span className='d-block fs-18 fw-6'>Total:</span>
                      <div className='cart-total-value fw-8'>$ {totalAmount.toFixed(2)}</div>
                      <button type='button' className='checkout-btn bg-purple text-white fw-6'>Checkout</button>
                    </div>
                  </div>
                  {/** end cart right */}
                </div>
              </div>

            </CartWrapper>
            )

      }
    </>

  )
}

export default CartPage
