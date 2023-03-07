import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshRandmFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandmFact, [])

  return { fact, refreshRandmFact }
}
