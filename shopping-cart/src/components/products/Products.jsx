import './Products.css'
import { AddToCartIcon } from '../icons/icons'

const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
              <p>${product.price}</p>
            </div>
            <div>
              <AddToCartIcon />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products
