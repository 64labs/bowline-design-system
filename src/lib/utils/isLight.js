import contrast from 'get-contrast'

const isLight = (color, c1, c2) => {
  if (contrast.isAccessible(color, c1, {ignoreAlpha: true})) {
    return c1
  }
  if (contrast.isAccessible(color, c2, {ignoreAlpha: true})) {
    return c2
  }
  return c1
}

export default isLight
