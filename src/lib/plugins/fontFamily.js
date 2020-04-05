import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const styles = {
    '.text': {fontFamily: theme.fontFamily.text},
    '.heading': {fontFamily: theme.fontFamily.heading},
  }

  return {styles}
}
