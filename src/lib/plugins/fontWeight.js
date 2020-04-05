import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(theme.fontWeights, (key, val) => ({
    [key('text-weight')]: {fontWeight: val},
  }))

  return {styles, variants: ['responsive']}
}
