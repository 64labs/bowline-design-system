import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = styleMap(theme.spacing, (key, value) => ({
    [key('p')]: {padding: value},
    [key('px')]: {paddingLeft: value, paddingRight: value},
    [key('py')]: {paddingTop: value, paddingBottom: value},
    [key('pt')]: {paddingTop: value},
    [key('pr')]: {paddingRight: value},
    [key('pb')]: {paddingBottom: value},
    [key('pl')]: {paddingLeft: value},
  }))

  return {styles, variants: ['responsive']}
}
