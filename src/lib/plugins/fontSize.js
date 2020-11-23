import capsize from 'capsize'

export default (type) => ({theme}) => {
  const styles = {
    ...Object.keys(theme[`${type}Sizes`]).reduce((css, key) => {
      const {size, rows} = theme[`${type}Sizes`][key]

      const style = capsize({
        fontMetrics: theme[`${type}FontMetrics`],
        fontSize: size,
        leading: theme.grid * rows,
      })

      return {
        ...css,
        [`.${type}-${key}`]: {
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

  return {styles, variants: ['responsive']}
}
