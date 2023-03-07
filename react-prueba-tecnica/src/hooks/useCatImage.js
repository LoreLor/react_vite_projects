import { useEffect, useState } from 'react'
import { getRandomCat } from '../services/getRandomCat'
import { URL_CAT_FIRSTWORD } from '../utils/constants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1)

    getRandomCat(firstWord).then((newCat) => setImageUrl(newCat))
  }, [fact])
  return { imageUrl: `${URL_CAT_FIRSTWORD}/${imageUrl}` }
}
