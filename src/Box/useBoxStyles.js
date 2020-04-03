import {useTheme} from '../Provider'
import {useBackground} from '../util/BackgroundContext'
import {responsiveClassnames} from '../util'

const useBoxStyles = (properties) => {
  const {
    background,
    boxShadow,
    display,
    flexDirection,
    alignItems,
    alignSelf,
    justifyContent,
    align,
    justify,
    flex,
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
    top,
    right,
    bottom,
    left,
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
    gridColumn,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderRadius,
  } = properties.hover ? properties.hover : properties

  const theme = useTheme()
  const parentBackground = useBackground()

  const classes = (value, label) =>
    responsiveClassnames(
      theme ? theme.breakpoints : {},
      value,
      label,
      properties.hover && 'hover'
    )

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
    classes(flexDirection, 'direction'),
    classes(flex, 'flex'),
    classes(flexShrink, 'shrink'),
    classes(flexGrow, 'grow'),
    classes(flexBasis, 'basis'),
    classes(size, 'size'),
    classes(alignItems || align, 'align-items'),
    classes(alignSelf, 'align-self'),
    classes(justifyContent || justify, 'justify-content'),
    classes(position, 'position'),
    classes(top, 'top'),
    classes(right, 'right'),
    classes(bottom, 'bottom'),
    classes(left, 'left'),
    classes(overflow, 'overflow'),
    classes(overflowX, 'overflow-x'),
    classes(overflowY, 'overflow-y'),
    classes(gridTemplateColumns, 'grid-template-cols'),
    classes(gridGap, 'gap'),
    classes(gridRowGap, 'row-gap'),
    classes(gridColumnGap, 'col-gap'),
    classes(gridColumn, 'grid-column'),
    classes(border, 'border'),
    classes(borderTop, 'border-top'),
    classes(borderRight, 'border-right'),
    classes(borderBottom, 'border-bottom'),
    classes(borderLeft, 'border-left'),
    classes(borderColor, 'border-color'),
    classes(borderRadius, 'radius'),
    ...(background ? [].concat(classes(background, 'bg')) : []),
    {
      [`wrap`]: wrap || flexWrap,
      [`shadow-${boxShadow}`]: boxShadow,
      [`shadow-${boxShadow}-on-${
        !background || background === 'transparent'
          ? parentBackground
          : background
      }`]:
        boxShadow &&
        ((background && background !== 'transparent') ||
          (parentBackground && parentBackground !== 'transparent')),
    },
  ]
}

export default useBoxStyles
