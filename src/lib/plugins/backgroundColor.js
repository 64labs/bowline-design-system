import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    {...theme.colors, transparent: 'transparent'},
    (key, val, token) => ({
      [key('bg')]: {backgroundColor: val},
      [`.hover\\:bg-${token}:hover`]: {backgroundColor: val},
      [`.active\\:bg-${token}:active`]: {backgroundColor: val},
      [`.focus\\:bg-${token}:focus`]: {backgroundColor: val},
    })
  )

  return {styles, variants: ['responsive']}
}
