import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    ...styleMap({...theme.spacing, auto: 'auto'}, (key, value) => ({
      [key('m')]: {margin: value},
      [key('mx')]: {marginLeft: value, marginRight: value},
      [key('my')]: {marginTop: value, marginBottom: value},
      [key('mt')]: {marginTop: value},
      [key('mr')]: {marginRight: value},
      [key('mb')]: {marginBottom: value},
      [key('ml')]: {marginLeft: value},
    })),
  }

  return {styles, variants: ['responsive']}
}
