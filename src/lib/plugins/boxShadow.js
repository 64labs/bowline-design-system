import styleMap from '../utils/styleMap'
import isLight from '../utils/isLight'

export default () => ({theme}) => {
  const styles = {
    ...styleMap(theme.shadows, (key, val, rawKey) => ({
      [key('shadow')]: {boxShadow: `${val.style} ${val.color}`},
      ...styleMap(theme.colors.background, (_key, _val, _rawKey) => ({
        [`${key('shadow')}-on-${rawKey}`]: {
          boxShadow: `${val.style} ${isLight(
            _val,
            val.color,
            val.colorInverted || 'white'
          )}`,
        },
      })),
    })),
  }

  return {styles}
}
