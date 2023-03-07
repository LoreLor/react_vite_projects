import { useEffect, useState } from 'react'
import { getRandomCat } from '../services/getRandomCat'

const URL_CAT_FIRSTWORD = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // eslint-disable-next-line no-trailing-spaces

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1)
    getRandomCat(firstWord).then((newCat) => setImageUrl(newCat))
  }, [fact])
  return { imageUrl: `${URL_CAT_FIRSTWORD}/${imageUrl}` }
}
