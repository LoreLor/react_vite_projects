import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons/icons'
import { useCart } from '../../hooks/useCart'

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart()

  // constato que exista el producto en el carro
  const checkProductCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          /* si existe cambia el tipo de boton */
          const isProductInCart = checkProductCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <p>${product.price}</p>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : 'green' }}
                  onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
