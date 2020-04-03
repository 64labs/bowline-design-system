import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(theme.letterSpacing, (key, val) => ({
    [key('kern')]: {letterSpacing: val},
  }))

  return {styles}
}
