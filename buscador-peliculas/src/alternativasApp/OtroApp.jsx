
// import { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import ListMovies from './components/ListMovies'
import responseMovies from './mock/pelis.json'
// import noMoviesResponse from './mock/no-result.json'

function App () {
  // forma facil de saber cuando llamar al archivo pelis
  // si tengo pelis->Search es array => Search.lenght > 0
  const movies = responseMovies.Search
  const hasMovie = movies?.length > 0

  // const inputRef = useRef()

  const [change, setChange] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const value = inputRef.current.value
    // console.log('value', value)

    // const fields = new window.FormData(e.target)
    // const query = fields.get('query')
    // console.log('query', query)

    // code refacttored
    // const fields = Object.fromEntries(new window.FormData(e.target))
    console.log({ change })
  }

  const handleChange = (e) => {
    const newChange = e.target.value
    setChange(newChange)
    if (newChange === ' ') {
      setError('no se puede buscar una pelicula vacia')
      return
    }

    if (newChange.match(/^\+$/)) {
      setError('no se puede buscar con un numero')
      return
    }

    if (newChange.length < 3) {
      setError('no se puede buscar con menos de 3 caracteres')
      return
    }

    setError(null)
  }

  // useEffect(() => {
  //   if(isFirstInput.current){
  //    isFirstInput.current = search === ''
  //    return
  //   }
  //   if (change === '') {
  //     setError('no se puede buscar una pelicula vacia')
  //     return
  //   }

  //   if (change.match(/^\+$/)) {
  //     setError('no se puede buscar con un numero')
  //     return
  //   }

  //   if (change.length < 3) {
  //     setError('no se puede buscar con menos de 3 caracteres')
  //     return
  //   }

  //   setError(null)
  // }, [change])

  return (
    <div className='page'>
      <header>
        <h1> Buscar Peliculas </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            type='text'
            value={change}
            placeholder='Matrix, Star Wars...'
            onChange={handleChange}
            style={{ border: '2px solid transparent', borderColor: error ? 'red' : 'green' }}
            // ref={inputRef}
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}> {error} </p>}
      </header>
      <main>
        {
          hasMovie
            ? (
              <ListMovies movies={movies} />
              )
            : (
              <p>Movie Search is Not Found</p>
              )
        }
      </main>
    </div>
  )
}

export default App
