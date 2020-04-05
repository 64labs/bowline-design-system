import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    ['capitalize', 'uppercase', 'lowercase', 'none', 'inherit'],
    (key, val) => ({
      [key('text-transform')]: {textTransform: val},
    })
  )

  return {styles}
}
