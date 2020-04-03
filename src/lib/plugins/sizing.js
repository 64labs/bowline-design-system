import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    ...styleMap({...theme.spacing, auto: 'auto'}, (key, value) => ({
      [key('size')]: {width: value, height: value},
      [key('min-height')]: {minHeight: value},
      [key('height')]: {height: value},
      [key('max-height')]: {maxHeight: value},
      [key('min-width')]: {minWidth: value},
      [key('width')]: {width: value},
      [key('max-width')]: {maxWidth: value},
    })),

    ...styleMap(theme.contentWidth, (key, value) => ({
      [key('content-width')]: {maxWidth: value},
    })),
  }

  return {styles, variants: ['responsive']}
}
