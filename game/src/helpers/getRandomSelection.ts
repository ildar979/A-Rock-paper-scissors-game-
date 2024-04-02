export const getRandomSelection = (arr: string[]) => {
  const randomIndex = Math.floor(Math.random() * (arr.length))
  const result = arr[randomIndex]
  return result
}
