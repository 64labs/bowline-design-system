import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    // flex-direction
    ...styleMap(
      ['row', 'row-reverse', 'column', 'column-reverse'],
      (key, val) => ({
        [key('direction')]: {flexDirection: val},
      })
    ),

    // align-items, align-self
    ...styleMap(
      ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      (key, val) => ({
        [key('align-items')]: {alignItems: val},
        [key('align-self')]: {alignSelf: val},
      })
    ),

    // justify-content
    ...styleMap(
      [
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-between',
        'stretch',
      ],
      (key, val) => ({
        [key('justify-content')]: {justifyContent: val},
      })
    ),

    // flex-wrap
    ...styleMap(['wrap', 'nowrap'], (key, val, rawKey) => ({
      [`.${rawKey}`]: {flexWrap: val},
    })),

    // flex-grow
    ...styleMap([0, 1, 2, 3], (key, val) => ({
      [key('grow')]: {flexGrow: val},
    })),

    // flex-shrink
    ...styleMap([0, 1], (key, val) => ({
      [key('shrink')]: {flexShrink: val},
    })),

    // flex-basis
    ...styleMap({0: 0, 1: 1, auto: 'auto', full: '100%'}, (key, val) => ({
      [key('basis')]: {flexBasis: val},
    })),

    // flex
    ...styleMap(
      {initial: '0 1 auto', 1: '1 1 0%', auto: '1 1 auto', none: 'none'},
      (key, val) => ({
        [key('flex')]: {flex: val},
      })
    ),
  }

  return {styles, variants: ['responsive']}
}
