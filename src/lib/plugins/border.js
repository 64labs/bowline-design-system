import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(theme.border.style, (key, val) => ({
    [key('border')]: {border: val},
    [key('border-top')]: {borderTop: val},
    [key('border-right')]: {borderRight: val},
    [key('border-bottom')]: {borderBottom: val},
    [key('border-left')]: {borderLeft: val},
  }))

  return {styles, variants: ['responsive']}
}
