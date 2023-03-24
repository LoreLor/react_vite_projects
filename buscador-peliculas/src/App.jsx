
import Movies from './components/ListMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce((search) => {
    console.log('search', search)
    getMovies({ search })
  }, 500)
  , [getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    // getMovies({ search: newSearch })
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Prueba Tecnica Buscar Pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            type='text'
            value={search}
            placeholder='Matrix, Star Wars...'
            onChange={handleChange}
            style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'green' }}
          />
          <label>Sort</label><br />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>

        {error && <p style={{ color: 'red' }}> {error} </p>}
      </header>

      <main>
        {loading
          ? <span className='loader' />
          : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
