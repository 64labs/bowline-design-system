import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(['left', 'center', 'right'], (key, val) => ({
    [key('text-align')]: {textAlign: val},
  }))

  return {styles, variants: ['responsive']}
}
