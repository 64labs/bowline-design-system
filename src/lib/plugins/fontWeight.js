import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const typeConfig = theme.typography
  const typeKeys = Object.keys(typeConfig)

  const styles = typeKeys.reduce((acc, configKey) => {
    const config = typeConfig[configKey]
    return {
      ...acc,
      ...styleMap(config.weights, (key, val) => ({
        [key(`weight-${configKey}`)]: {fontWeight: val},
      })),
    }
  }, {})

  return {styles, variants: ['responsive']}
}
