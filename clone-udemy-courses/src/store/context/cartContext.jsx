import React, { useContext, useEffect, useReducer } from 'react'
import { ADD_TO_CART, CLEAR_CART, GET_CART_TOTAL, REMOVE_ITEM_CART } from '../actions'
import cartReducer from '../reducers/cartReducer'

const loadCartFromStorage = () => {
  const cart = window.localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(window.localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: loadCartFromStorage(),
  totalItems: 0,
  totalAmount: 0
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (id, image, name, creator, discounted, category) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id, image, name, creator, discounted, category
      }
    })
    console.log('course', { id, image, name, creator, discounted, category })
  }

  const removeItemCart = (id) => {
    dispatch({
      type: REMOVE_ITEM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART
    })
  }

  useEffect(() => {
    dispatch({
      type: GET_CART_TOTAL
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeItemCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
