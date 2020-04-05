const baseliner = (grid, scale, size, rows) => {
  const descenderHeightScale = scale.descenderHeightScale
  const capHeight = scale.capHeight
  const lineHeight = grid * rows
  const lineHeightScale = lineHeight / size
  const typeOffset = (lineHeightScale - 1.0) / 2.0 + descenderHeightScale
  const topSpace = lineHeight - capHeight * size
  const halfGrid = grid / 2
  const gridMod = topSpace % halfGrid
  const heightCorrectionRaw = topSpace - gridMod
  const heightCorrection = heightCorrectionRaw + 1.0

  return {
    transform: `translateY(${typeOffset}em)`,
    negativeTransform: `translateY(-${typeOffset}em)`,
    marginTop: -heightCorrection,
  }
}

export default baseliner