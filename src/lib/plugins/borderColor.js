import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    {...theme.colors.background, transparent: 'transparent'},
    (key, val, rawKey) => ({
      [`[class*='border-'].border-color-${rawKey}`]: {
        borderColor: `${val}!important`,
      },
    })
  )

  return {styles, variants: ['responsive']}
}
