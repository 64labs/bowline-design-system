import React, {useContext, useMemo} from 'react'
import defaultConfig from './config'

export const ctx = React.createContext()

const Provider = ctx.Provider

export const BowlineProvider = ({theme, ...props}) => {
  const value = theme || defaultConfig

  const _value = useMemo(() => {
    if (!value || !value.screens) {
      return []
    }
    const breakpoints = Object.keys(value.screens)
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
    return {
      ...value,
      breakpoints,
    }
  }, [])

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

  // apply default variant if it exists and no variant is passed to component
  if (variants && variants.default && !props.variant) {
    return {...props, ...variants.default}
  }

  return variants && props.variant && variants[props.variant]
    ? {...props, ...variants[props.variant]}
    : props
}
