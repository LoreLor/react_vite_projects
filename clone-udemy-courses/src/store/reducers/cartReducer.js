import {
  ADD_TO_CART,
  CLEAR_CART,
  GET_CART_TOTAL,
  REMOVE_ITEM_CART
} from '../actions'

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const filterItem = state.cart.filter((item) => item.id === action.payload.id)
    if (filterItem.length < 1) {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    return {
      ...state
    }
  }

  if (action.type === GET_CART_TOTAL) {
    const totalAmount = state.cart.reduce((total, cartItem) => {
      total += cartItem.discounted
      return total
    }, 0)

    return {
      ...state,
      totalItems: state.cart.length,
      totalAmount
    }
  }

  if (action.type === REMOVE_ITEM_CART) {
    const itemFiltered = state.cart.filter(item => item.id !== action.payload)
    return {
      ...state,
      cart: itemFiltered
    }
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: []
    }
  }

  throw new Error(`No matching "${action.type}" - action type`)
}

export default cartReducer
