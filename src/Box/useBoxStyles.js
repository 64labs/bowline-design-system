import {useTheme} from '../Provider'
import {responsiveClassnames} from '../util'

const useBoxStyles = ({
  as,
  background,
  boxShadow,
  display,
  flexDirection,
  alignItems,
  alignSelf,
  justifyContent,
  align,
  justify,
  flexGrow,
  flexShrink,
  flexBasis,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  position,
  size,
  overflow,
  overflowX,
  overflowY,
  minHeight,
  height,
  maxHeight,
  minWidth,
  width,
  maxWidth,
  flexWrap,
  wrap,
  gridTemplateColumns,
  gridGap,
  gridRowGap,
  gridColumnGap,
  borderRadius,
}) => {
  const theme = useTheme()

  const classes = (value, label) =>
    responsiveClassnames(theme ? theme.breakpoints : {}, value, label)

  const resolvedPaddingTop = paddingTop || paddingY || padding
  const resolvedPaddingBottom = paddingBottom || paddingY || padding
  const resolvedPaddingLeft = paddingLeft || paddingX || padding
  const resolvedPaddingRight = paddingRight || paddingX || padding

  const resolvedMarginTop = marginTop || marginY || margin
  const resolvedMarginBottom = marginBottom || marginY || margin
  const resolvedMarginLeft = marginLeft || marginX || margin
  const resolvedMarginRight = marginRight || marginX || margin

  const paddingClasses = classes(padding, 'p')
  const paddingXClasses = !paddingClasses && classes(paddingX, 'px')
  const paddingYClasses = !paddingClasses && classes(paddingY, 'py')
  const paddingTopClasses =
    !paddingClasses && !paddingYClasses && classes(resolvedPaddingTop, 'pt')
  const paddingRightClasses =
    !paddingClasses && !paddingXClasses && classes(resolvedPaddingRight, 'pr')
  const paddingBottomClasses =
    !paddingClasses && !paddingYClasses && classes(resolvedPaddingBottom, 'pb')
  const paddingLeftClasses =
    !paddingClasses && !paddingXClasses && classes(resolvedPaddingLeft, 'pl')

  const marginClasses = classes(margin, 'p')
  const marginXClasses = !marginClasses && classes(marginX, 'mx')
  const marginYClasses = !marginClasses && classes(marginY, 'my')
  const marginTopClasses =
    !marginClasses && !marginYClasses && classes(resolvedMarginTop, 'mt')
  const marginRightClasses =
    !marginClasses && !marginXClasses && classes(resolvedMarginRight, 'mr')
  const marginBottomClasses =
    !marginClasses && !marginYClasses && classes(resolvedMarginBottom, 'mb')
  const marginLeftClasses =
    !marginClasses && !marginXClasses && classes(resolvedMarginLeft, 'ml')

  return [
    paddingClasses,
    paddingYClasses,
    paddingXClasses,
    paddingTopClasses,
    paddingRightClasses,
    paddingBottomClasses,
    paddingLeftClasses,
    marginClasses,
    marginXClasses,
    marginYClasses,
    marginTopClasses,
    marginRightClasses,
    marginBottomClasses,
    marginLeftClasses,
    classes(minHeight, 'minHeight'),
    classes(height, 'height'),
    classes(maxHeight, 'maxHeight'),
    classes(minWidth, 'minWidth'),
    classes(width, 'width'),
    classes(maxWidth, 'maxWidth'),
    classes(display, 'display'),
    classes(flexDirection, 'flex-direction'),
    classes(flexShrink, 'flex-shrink'),
    classes(flexGrow, 'flex-grow'),
    classes(flexBasis, 'flex-basis'),
    classes(size, 'size'),
    classes(alignItems || align, 'flex-alignItems'),
    classes(alignSelf, 'flex-alignSelf'),
    classes(justifyContent || justify, 'flex-justifyContent'),
    classes(position, 'position'),
    classes(overflow, 'overflow'),
    classes(overflowX, 'overflowX'),
    classes(overflowY, 'overflowY'),
    classes(gridTemplateColumns, 'grid-template-cols'),
    classes(gridGap, 'gap'),
    classes(gridRowGap, 'row-gap'),
    classes(gridColumnGap, 'col-gap'),
    ...(background ? [].concat(classes(background, 'bg')) : []),
    {
      [`flex-wrap`]: wrap || flexWrap,
      [`shadow-${boxShadow}`]:
        boxShadow && (!background || background === 'transparent'),
      [`shadow-${boxShadow}-on-${background}`]:
        boxShadow && background && background !== 'transparent',
    },
  ]
}

export default useBoxStyles
