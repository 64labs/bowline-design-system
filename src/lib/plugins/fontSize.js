import baseliner from '../utils/baseliner'

export default (type) => ({theme}) => {
  const styles = {
    ...Object.keys(theme[`${type}Sizes`]).reduce((css, key) => {
      const screenRules = theme[`${type}Sizes`][key]
      return {
        ...css,
        ...Object.keys(screenRules).reduce((a, label) => {
          const {size, rows} = screenRules[label]
          const {transform, marginTop} = baseliner(
            theme.grid,
            theme.fontScale[type],
            size,
            rows
          )
          const rules = {
            [`.${type}-${key}`]: {
              fontSize: size,
              lineHeight: `${theme.grid * rows}px`,
              '&.baseline-crop': {
                paddingTop: 1,
                transform: transform,
                '&:before': {
                  content: '""',
                  display: 'block',
                  height: 0,
                  marginTop: marginTop,
                },
              },
            },
          }
          if (label === 'default') {
            return {...a, ...rules}
          }
          return {
            ...a,
            [`@media (min-width: ${theme.screens[label]}px)`]: {
              ...css[`@media (min-width: ${theme.screens[label]}px)`],
              ...rules,
            },
          }
        }, {}),
      }
    }, {}),
  }

  return {styles}
}
