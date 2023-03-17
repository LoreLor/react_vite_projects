import { products as initialState } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import Products from './components/products/Products'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialState)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <br />
      <Footer />
    </CartProvider>
  )
}

export default App
