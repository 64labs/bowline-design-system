import capsize from 'capsize'

export default () => ({theme}) => {
  const typeConfig = theme.typography
  const typeKeys = Object.keys(typeConfig)

  const styles = typeKeys.reduce((acc, configKey) => {
    const config = typeConfig[configKey]
    return {
      ...acc,
      ...Object.keys(config.scale).reduce((css, scaleKey) => {
        const {size, rows} = config.scale[scaleKey]
        const style = capsize({
          fontMetrics: config.metrics,
          fontSize: size,
          leading: theme.grid * rows,
        })
        return {
          ...css,
          [`.size-${configKey}-${scaleKey}`]: {
            fontSize: style.fontSize,
            lineHeight: style.lineHeight,
            '&.baseline-crop': {
              padding: style.padding,
              '&:before': style['::before'],
              '&:after': style['::after'],
            },
          },
        }
      }, {}),
    }
  }, {})

  return {styles, variants: ['responsive']}
}
