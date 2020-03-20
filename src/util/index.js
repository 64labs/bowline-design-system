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
