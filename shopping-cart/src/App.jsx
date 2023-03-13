import { products as initialState } from './mocks/products.json'
import Products from './components/products/Products'
import { useState } from 'react'
import Header from './components/header/Header'
import { useFilters } from './hooks/useFilters'
import Footer from './components/footer/Footer'

function App () {
  const [products] = useState(initialState)
  const { filterProducts, filter, setFilter } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
      <br />
      <Footer filter={filter} />
    </>
  )
}

export default App
