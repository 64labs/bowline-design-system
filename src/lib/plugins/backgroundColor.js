import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    {...theme.colors.background, transparent: 'transparent'},
    (key, val) => ({
      [key('bg')]: {backgroundColor: val},
    })
  )

  return {styles, variants: ['responsive']}
}
