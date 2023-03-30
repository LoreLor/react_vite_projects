import React, { useContext, useEffect, useReducer } from 'react'
import { ADD_TO_CART, GET_CART_TOTAL } from '../actions'
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

  const addToCart = (id, category, image, name, creator, discounted) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        category,
        image,
        name,
        creator,
        discounted
      }
    })
    console.log('course', { id, name, category, image })
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
      addToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
