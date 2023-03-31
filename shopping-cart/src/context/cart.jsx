import { createContext, useReducer } from 'react'
import { reducer, initialState } from '../reducers/cartReducer'

// me creo el contexto
export const CartContext = createContext()

// reducer
export const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) => (dispatch)({
    type: 'ADD_TO_CART',
    payload: product
  })

  const sustractToCart = (product) => (dispatch)({
    type: 'SUSTRACT_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => (dispatch)({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => (dispatch)({
    type: 'CLEAR_CART',
    payload: []
  })
  return {
    state, addToCart, removeFromCart, clearCart, sustractToCart
  }
}

// proveo el contexto
export const CartProvider = ({ children }) => {
  const { addToCart, removeFromCart, clearCart, state, sustractToCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart,
      sustractToCart
      // minToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
