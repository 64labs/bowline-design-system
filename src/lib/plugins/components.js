import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    '[class*="inline-container"]:not([class*="inline-container-none"])': {
      paddingTop: 1,
      '&:before': {
        content: '""',
        display: 'block',
      },
    },

    '@responsive': {
      // Inline
      ...styleMap(theme.spacing, (key, val) =>
        typeof val === 'number'
          ? {
              [key('inline-container')]: {
                '&:before': {marginTop: -1 * (val + 1)},
              },
              [key('inline')]: {marginLeft: -val},
            }
          : {}
      ),
    },
  }

  return {styles}
}
