export const resolveResponsiveClassnames = (element, value, label) => {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        return `u-${element}--${label}-${v}-${i}`
      })
    }
    return `u-${element}--${label}-${value}-0`
  }
}

export const responsiveClassnames = (breakpoints, value, label) => {
  const breakpointNames = Object.keys(breakpoints)
  if (value != null) {
    if (Array.isArray(value)) {
      return [`${label}-${value[0]}`].concat(
        value.map((v, i) => {
          return `${label}-${v}:${breakpointNames[i]}`
        })
      )
    }
    return `${label}-${value}`
  }
}
