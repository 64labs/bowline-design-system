import {resolveResponsiveClassnames} from '../util'

const classes = (value, label) =>
  resolveResponsiveClassnames('box', value, label)

const useBoxStyles = ({
  as,
  background,
  boxShadow,
  display,
  alignItems,
  alignSelf,
  justifyContent,
  align,
  justify,
  flexGrow,
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
  width,
  wrap,
}) => {
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
    'u-box',
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
    classes(width, 'width'),
    classes(display, 'display'),
    classes(flexGrow, 'grow'),
    classes(size, 'size'),
    classes(alignItems || align, 'alignItems'),
    classes(alignSelf, 'alignSelf'),
    classes(justifyContent || justify, 'justifyContent'),
    classes(position, 'position'),
    classes(overflow, 'overflow'),
    classes(overflowX, 'overflowX'),
    classes(overflowY, 'overflowY'),
    {[`bg--${background}`]: background, [`u-box--wrap`]: wrap},
    {
      [`shadow--${boxShadow}`]:
        boxShadow && (!background || background === 'transparent'),
      [`shadow--${boxShadow}-on-${background}`]:
        boxShadow && background && background !== 'transparent',
    },
  ]
}

export default useBoxStyles
