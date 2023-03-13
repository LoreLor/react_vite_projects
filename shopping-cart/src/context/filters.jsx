import { createContext, useState } from 'react'

// paso 1: crear el contexto --> este se consume
export const FiltersContext = createContext()

// paso 2: Proveer el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
