import styleMap from '../utils/styleMap'

export default () => ({theme}) => {
  const typeConfig = theme.typography

  const typeKeys = Object.keys(typeConfig)

  const styles = typeKeys.reduce((acc, key) => {
    return {...acc, [`.font-${key}`]: {fontFamily: typeConfig[key].family}}
  }, {})

  return {styles}
}
