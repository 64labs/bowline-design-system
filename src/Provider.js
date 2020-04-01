import React, {useContext, useMemo} from 'react'

export const ctx = React.createContext()

const Provider = ctx.Provider

export const ThemeProvider = ({value, ...props}) => {
  const breakpoints = useMemo(() => {
    console.log('MEMOMOMO')
    if (!value || !value.screens) {
      return []
    }
    return Object.keys(value.screens)
      .map((bpName) => ({
        name: bpName,
        value: value.screens[bpName],
      }))
      .sort((a, b) => {
        if (a.value < b.value) {
          return -1
        }
        if (a.value > b.value) {
          return 1
        }
        return 0
      })
  }, [])

  const _value = {
    ...value,
    breakpoints,
  }
  return <Provider value={_value} {...props} />
}

export const useTheme = () => {
  const theme = useContext(ctx)

  return theme
}

export const useVariants = (component, props = {}) => {
  const {components} = useTheme()

  if (!components || !components[component]) {
    return props
  }

  const variants = components[component].variants

  return variants && props.variant && variants[props.variant]
    ? {...props, ...variants[props.variant]}
    : props
}
