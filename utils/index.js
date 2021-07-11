export const generateSlug = (text) => {
  let result = text.toLowerCase()
  result.replace(' ', '-')

  return result
}
