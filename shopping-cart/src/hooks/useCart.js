import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const cart = useContext(CartContext)

  // para saber si estoy usando el custon hook en un lugar apropiado
  // o sea la app no esta envuelta o el componente quedo afuera -> si es undefined esta fuera
  if (cart === undefined) {
    throw new Error('useCart mas be used within a CartProvider')
  }

  return cart
}
