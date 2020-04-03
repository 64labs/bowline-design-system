import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    ['hidden', 'visible', 'auto', 'scroll'],
    (key, val) => ({
      [key('overflow')]: {overflow: val},
      [key('overflow-x')]: {overflowX: val},
      [key('overflow-y')]: {overflowY: val},
    })
  )

  return {styles, variants: ['responsive']}
}
