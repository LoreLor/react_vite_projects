
import React from 'react'
import './App.css'
// import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
// import { getRandomCat } from './services/getRandomCat'
// import { getRandomFact } from './services/getRandomFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const URL_CAT_FIRSTWORD = 'https://cataas.com'

const App = () => {
  // const [fact, setFact] = useState()
  // const [imageUrl, setImageUrl] = useState()

  // useEffect(() => {
  //   getRandomFact().then(newFact => setFact(newFact))
  // }, [])

  // useEffect(() => {
  //   // recupero la primera palabra
  //   if (!fact) return
  //   const firstWord = fact.split(' ', 1)
  //   getRandomCat(firstWord).then((newCat) => setImageUrl(newCat))
  // }, [fact])

  // const handleClick = async () => {
  //   const newFact = await getRandomFact()
  //   setFact(newFact)
  // }

  const { fact, refreshRandmFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandmFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`cat_image_${fact}`} />}
      </section>
      <br />
      <button onClick={handleClick}>reset</button>
      <br />

      {/* como reutilizar el custom hook */}
      {/* <Otro /> */}
    </main>
  )
}

export default App
