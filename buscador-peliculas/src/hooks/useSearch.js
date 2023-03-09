import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('no se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\+$/)) {
      setError('no se puede buscar con un numero')
      return
    }

    if (search.length < 3) {
      setError('no se puede buscar con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
