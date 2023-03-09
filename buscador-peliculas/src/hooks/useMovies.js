
import { useCallback, useMemo, useRef, useState } from 'react'
import searchMovie from '../services/searchMovie'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef()

  // para hacer fetch de las movies: recupera las peliculas
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search

      const newMovies = await searchMovie({ search })
      setMovies(newMovies)
      setLoading(false)
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch se ejecuta
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
