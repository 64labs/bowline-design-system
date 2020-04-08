import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    ...styleMap(
      ['absolute', 'relative', 'fixed', 'sticky', 'static'],
      (key, val) => ({
        [key('position')]: {position: val},
      })
    ),
    ...styleMap({0: '0', half: '50%', full: '100%'}, (key, val) => ({
      [key('top')]: {top: val},
      [key('right')]: {right: val},
      [key('left')]: {left: val},
      [key('bottom')]: {bottom: val},
    })),
  }

  return {styles, variants: ['responsive']}
}
