const styleMap = (src, fn) => {
  const obj = Array.isArray(src)
    ? src.reduce((a, b) => ({...a, [b]: b}), {})
    : src

  const createAppendKey = (key) => (name) => `.${name}-${key}`
  return Object.keys(obj).reduce((css, key) => {
    const cn = createAppendKey(key)
    return {...css, ...fn(cn, obj[key], key)}
  }, {})
}

export default styleMap
