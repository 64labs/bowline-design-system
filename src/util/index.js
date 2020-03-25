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
      return value.map((v, i) => {
        if (i === 0) {
          return `${label}-${v}`
        }
        return `${label}-${v}:${breakpointNames[i - 1]}`
      })
    }
    return `${label}-${value}`
  }
}
