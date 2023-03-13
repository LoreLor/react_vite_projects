import { useState } from 'react'
import { products as initialState } from '../mocks/products.json'

export function useFilters () {
  const [products] = useState(initialState)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = () => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
            (
              filter.category === 'all' ||
              product.category === filter.category
            )
      )
    })
  }
  return { filterProducts, filter, setFilter }
}
