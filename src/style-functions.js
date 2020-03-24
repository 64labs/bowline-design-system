import contrast from 'get-contrast'
import get from 'lodash.get'

export const isLight = (color, c1, c2) => {
  if (contrast.isAccessible(color, c1, {ignoreAlpha: true})) {
    return c1
  }

  if (contrast.isAccessible(color, c2, {ignoreAlpha: true})) {
    return c2
  }

  console.warn(
    `Inaccessible colors for ${c1} and ${c2} against ${color}. Using ${c1}.`
  )

  return c1
}

export const mod = (a, b) => {
  return a % b
}

export const themeFunction = (theme) => (path, ...defaultValue) => {
  const value = get(theme, path.trim().replace(/('|")/g, ''), defaultValue)
  return Array.isArray(value) ? value.join(', ') : value
}

export const baseliner = (vars) => (size, rows, scaleKey, rule) => {
  const scale = vars['font-scale'][scaleKey]
  const descenderHeightScale = scale.descenderHeightScale
  const capHeight = scale.capHeight
  const grid = vars.grid

  const lineHeight = grid * rows
  const lineHeightScale = lineHeight / size
  const typeOffset = (lineHeightScale - 1.0) / 2.0 + descenderHeightScale
  const topSpace = lineHeight - capHeight * size
  const halfGrid = grid / 2
  const gridMod = topSpace % halfGrid
  const heightCorrectionRaw = topSpace - gridMod
  const heightCorrection = heightCorrectionRaw + 1.0

  if (rule === 'transform') {
    return `translateY(${typeOffset}em)`
  }

  if (rule === 'marginTop') {
    return `-${heightCorrection}px`
  }

  if (rule === 'negativeTransform') {
    return `translateY(-${typeOffset}em)`
  }
}
