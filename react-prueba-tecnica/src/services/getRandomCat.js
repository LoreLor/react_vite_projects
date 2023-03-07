
export const getRandomCat = async (firstWord) => {
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
  const data = await res.json()
  const url = data.url
  return url
}
