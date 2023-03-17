// Hook useReducer
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

// para actualizar el localStorage
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productInCart = state.findIndex(item => item.id === action.payload.id)

      if (productInCart >= 0) {
        const newState = structuredClone(state) // hace copia profunda del cart
        newState[productInCart].quantity++ // estoy modificando la copia
        updateLocalStorage(newState)
        return newState
      }
      const newState = [
        ...state,
        {
          ...action.payload, // product
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case 'SUSTRACT_TO_CART': {
      const productInCart = state.findIndex(item => item.id === action.payload.id)

      if (productInCart >= 0) {
        const newState = structuredClone(state) // hace copia profunda del cart
        newState[productInCart].quantity-- // estoy modificando la copia
        updateLocalStorage(newState)
        return newState
      }
      return
    }

    case 'REMOVE_FROM_CART': {
      const newState = state.filter(item => item.id !== action.payload.id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }

    default:
      return state
  }
}
