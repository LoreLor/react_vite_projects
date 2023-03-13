import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { products } from '../mocks/products.json'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = () => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
            (
              filters.category === 'all' ||
              product.category === filters.category
            )
      )
    })
  }
  return { filterProducts, filters, setFilters }
}
