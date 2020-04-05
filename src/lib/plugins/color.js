import styleMap from '../utils/styleMap'
import isLight from '../utils/isLight'

export default () => ({theme}) => {
  const styles = {
    ...styleMap(
      {...theme.colors.foreground, inherit: 'inherit'},
      (key, val) => ({
        [key('tone')]: {color: val},
      })
    ),
    ...styleMap(theme.colors.background, (key, val, rawKey) => ({
      [`.tone-neutral.tone-neutral-on-${rawKey}`]: {
        color: isLight(
          val,
          theme.colors.foreground.neutral || 'black',
          theme.colors.foreground.neutralInverted || 'white'
        ),
      },
      [`.tone-secondary.tone-secondary-on-${rawKey}`]: {
        color: isLight(
          val,
          theme.colors.foreground.secondary || 'black',
          theme.colors.foreground.secondaryInverted || 'white'
        ),
      },
    })),
  }

  return {styles, variants: ['responsive']}
}
