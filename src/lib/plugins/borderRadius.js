import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(theme.border.radius, (key, val) => ({
    [key('radius')]: {borderRadius: val},
  }))

  return {styles}
}
