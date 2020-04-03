import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    ...styleMap(
      [...Array(16).keys()].map((x) => x + 1),
      (key, val) => ({
        [key('grid-template-cols')]: {
          gridTemplateColumns: `repeat(${val}, 1fr)`,
        },
        [key('grid-column')]: {gridColumn: `span ${val}`},
      })
    ),
    ...styleMap(theme.spacing, (key, value) => ({
      [key('gap')]: {gridGap: value},
      [key('row-gap')]: {gridRowGap: value},
      [key('col-gap')]: {gridColumnGap: value},
    })),
  }

  return {styles, variants: ['responsive']}
}
