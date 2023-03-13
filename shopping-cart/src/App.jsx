import { products as initialState } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import Products from './components/products/Products'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialState)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <br />
      <Footer />
    </>
  )
}

export default App
