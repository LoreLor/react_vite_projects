import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../store/context/cartContext'
import { BsTrash } from 'react-icons/bs'
import CartItem from '../components/CartItem'

const CartWrapper = styled.div`
padding: 20px;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }

  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-right: 8px;
      }
    }


    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }

    .cart-total-value {
      font-size: 34px;
    }

    .text-total {
      margin-right: 8px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 2px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-purple);
        color: var(--clr-white);
        transform: scale(0.85);
      }
  }

  .cart-total {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 992px){
    grid-template-columns: 70% 30%;
    column-gap: 100px;
  }
}
`

const NotFoundWrapper = styled.div`
padding: 30px 0;
font-weight: 600;

`

const CartPage = () => {
  const { cart: cartItems, totalItems, totalAmount, clearCart } = useCartContext()

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
                <div className='card-pg-title'>
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
                      <button type='button' className='cart-clear-btn flex fs-15 fw-8 text' onClick={() => clearCart()}>
                        <span className='d-inline-block text-pink'>Clear All</span>
                        <BsTrash className='text-pink' />
                      </button>
                    </div>

                    <div className='cart-items-list grid'>
                      {
                        cartItems.map(item => {
                          return (
                            <CartItem
                              key={item.id}
                              cartItem={item}
                            />
                          )
                        })
                      }
                    </div>
                  </div>
                  {/* *end of grid left */}
                  {/** cart grid right */}
                  <div className='cart-grid-right'>
                    <div className='cart-total'>
                      <span className='text-total fs-18 fw-6'>Total: </span>
                      <div className='cart-total-value fw-8'>
                        $ {totalAmount.toFixed(2)}
                      </div>
                      <button type='button' className='checkout-btn bg-violet text-black fw-8'>Checkout</button>
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
