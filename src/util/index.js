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

export const responsiveClassnames = (breakpoints, value, label, modifier) => {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        if (i === 0) {
          return `${modifier ? modifier + ':' : ''}${label}-${v}`
        }
        return `${modifier ? modifier + ':' : ''}${
          breakpoints[i - 1].name
        }:${label}-${v}`
      })
    }
    return `${modifier ? modifier + ':' : ''}${label}-${value}`
  }
}
