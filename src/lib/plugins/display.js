import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(
    ['none', 'inline', 'block', 'flex', 'grid'],
    (key, val) => ({
      [key('display')]: {display: val},
    })
  )

  return {styles, variants: ['responsive']}
}
