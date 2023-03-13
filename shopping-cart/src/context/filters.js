import { createContext } from 'react'

// paso 1: crear el contexto
export const FiltersContext = createContext()

// paso 2: Proveer el contexto
export function FiltersProvider ({ children }) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
