import styleMap from '../utils/styleMap'
import isLight from '../utils/isLight'

export default () => ({theme}) => {
  const styles = {
    ...styleMap({...theme.colors, inherit: 'inherit'}, (key, val) => ({
      [key('tone')]: {color: val, fill: val},
    })),
    ...styleMap(theme.colors, (key, val, rawKey) => ({
      [`.tone-neutral.tone-neutral-on-${rawKey}`]: {
        color: isLight(
          val,
          theme.colors.neutral || 'black',
          theme.colors.neutralInverted || 'white'
        ),
      },
      [`.tone-secondary.tone-secondary-on-${rawKey}`]: {
        color: isLight(
          val,
          theme.colors.secondary || 'black',
          theme.colors.secondaryInverted || 'white'
        ),
      },
    })),
  }

  return {styles, variants: ['responsive']}
}
