import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {renderBackgroundProvider} from '../../util/BackgroundContext'
import useBoxStyles from './useBoxStyles'

const Box = React.forwardRef(
  (
    {
      as = 'div',
      hover,
      active,
      focus,
      background,
      className,
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
      position,
      top,
      right,
      bottom,
      left,
      size,
      minHeight,
      height,
      maxHeight,
      minWidth,
      width,
      maxWidth,
      overflow,
      overflowX,
      overflowY,
      wrap,
      flexWrap,
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
      ...props
    },
    ref
  ) => {
    const boxStyles = useBoxStyles({
      background,
      className,
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
      position,
      top,
      right,
      bottom,
      left,
      size,
      minHeight,
      height,
      maxHeight,
      minWidth,
      width,
      maxWidth,
      overflow,
      overflowX,
      overflowY,
      wrap,
      flexWrap,
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
    })

    const hoverStyles = useBoxStyles({...hover}, 'hover')
    const focusStyles = useBoxStyles({...focus}, 'focus')
    const activeStyles = useBoxStyles({...active}, 'active')

    const element = React.createElement(as, {
      className: cx(
        '__bl',
        boxStyles,
        hoverStyles,
        focusStyles,
        activeStyles,
        className
      ),
      ref,
      ...props,
    })

    return renderBackgroundProvider(background, element)
  }
)

const range1_12 = new Array(12).fill(0).map((_, i) => i + 1)

Box.propTypes = {
  /**
   * Sets the root element
   */
  as: t.any,
  /**
   * [colors] Applies background color
   */
  background: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Adds class name to underlying element
   */
  className: t.string,
  /**
   * Sets the CSS display rule
   */
  display: t.oneOfType([
    t.oneOf(['none', 'inline', 'block', 'flex', 'grid']),
    t.arrayOf(t.oneOf(['none', 'inline', 'block', 'flex', 'grid'])),
  ]),
  /**
   * [spacing] Applies padding to all sides
   */
  padding: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the top
   */
  paddingTop: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the right
   */
  paddingRight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the bottom
   */
  paddingBottom: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the left
   */
  paddingLeft: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the left and right
   */
  paddingX: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies padding to the top and bottom
   */
  paddingY: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to all sides
   */
  margin: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the top
   */
  marginTop: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the right
   */
  marginRight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the bottom
   */
  marginBottom: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the left
   */
  marginLeft: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the left and right
   */
  marginX: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies margin to the top and bottom
   */
  marginY: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Sets the CSS position rule
   */
  position: t.oneOfType([
    t.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
    t.arrayOf(t.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky'])),
  ]),
  /**
   * Applies a predefined CSS top value
   * {{"0": "0px", "half": "50%", "full": "100%"}}
   */
  top: t.oneOfType([
    t.oneOf([0, 'half', 'full']),
    t.arrayOf(t.oneOf([0, 'half', 'full'])),
  ]),
  /**
   * Applies a predefined CSS right value
   * {{"0": "0px", "half": "50%", "full": "100%"}}
   */
  right: t.oneOfType([
    t.oneOf([0, 'half', 'full']),
    t.arrayOf(t.oneOf([0, 'half', 'full'])),
  ]),
  /**
   * Applies a predefined CSS bottom value
   * {{"0": "0px", "half": "50%", "full": "100%"}}
   */
  bottom: t.oneOfType([
    t.oneOf([0, 'half', 'full']),
    t.arrayOf(t.oneOf([0, 'half', 'full'])),
  ]),
  /**
   * Applies a predefined CSS left value
   * {{"0": "0px", "half": "50%", "full": "100%"}}
   */
  left: t.oneOfType([
    t.oneOf([0, 'half', 'full']),
    t.arrayOf(t.oneOf([0, 'half', 'full'])),
  ]),
  /**
   * Applies a predefined CSS flex value shorthand
   * {{"initial": "0 1 auto", "1": "1 1 0%", "auto": "1 1 auto", "none": "none"}}
   */
  flex: t.oneOfType([
    t.oneOf(['initial', 1, 'auto', 'none']),
    t.arrayOf(t.oneOf(['initial', 1, 'auto', 'none'])),
  ]),
  /**
   * Applies CSS flex-grow rule
   */
  flexGrow: t.oneOfType([
    t.oneOf([0, 1, 2, 3, 4, 5]),
    t.arrayOf(t.oneOf([0, 1, 2, 3, 4, 5])),
  ]),
  /**
   * Applies CSS flex-shrink rule
   */
  flexShrink: t.oneOfType([t.oneOf([0, 1]), t.arrayOf(t.oneOf([0, 1]))]),
  /**
   * Applies CSS flex-basis rule
   */
  flexBasis: t.oneOfType([
    t.oneOf([0, 'auto']),
    t.arrayOf(t.oneOf([0, 'auto'])),
  ]),
  /**
   * Applies CSS flex-wrap rule
   */
  flexWrap: t.bool,
  /**
   * Applies CSS align-items rule
   */
  alignItems: t.oneOfType([
    t.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
    t.arrayOf(
      t.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
    ),
  ]),
  /**
   * Applies CSS justify-content rule
   */
  justifyContent: t.oneOfType([
    t.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-around',
      'space-between',
      'stretch',
    ]),
    t.arrayOf(
      t.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-between',
        'stretch',
      ])
    ),
  ]),
  /**
   * [spacing] Sets the width and height equally
   */
  size: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [shadows] Applies shadow styles and/or borders
   */
  boxShadow: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [border.style] Applies CSS border shorthand
   */
  border: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [border.style] Applies CSS border-top shorthand
   */
  borderTop: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [border.style] Applies CSS border-right shorthand
   */
  borderRight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [border.style] Applies CSS border-bottom shorthand
   */
  borderBottom: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [border.style] Applies CSS border-left shorthand
   */
  borderLeft: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [colors] Applies CSS border-color
   */
  borderColor: t.string,
  /**
   * [border.radius] Applies CSS border-radius
   */
  borderRadius: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Applies CSS overflow rule
   */
  overflow: t.oneOfType([
    t.oneOf(['hidden', 'visible', 'auto', 'scroll']),
    t.arrayOf(t.oneOf(['hidden', 'visible', 'auto', 'scroll'])),
  ]),
  /**
   * Applies CSS overflow-x rule
   */
  overflowX: t.oneOfType([
    t.oneOf(['hidden', 'visible', 'auto', 'scroll']),
    t.arrayOf(t.oneOf(['hidden', 'visible', 'auto', 'scroll'])),
  ]),
  /**
   * Applies CSS overflow-y rule
   */
  overflowY: t.oneOfType([
    t.oneOf(['hidden', 'visible', 'auto', 'scroll']),
    t.arrayOf(t.oneOf(['hidden', 'visible', 'auto', 'scroll'])),
  ]),
  /**
   * [spacing] Applies CSS min-height
   */
  minHeight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS height
   */
  height: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS max-height
   */
  maxHeightt: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS min-width
   */
  minWidth: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS width
   */
  width: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS max-height
   */
  maxWidth: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Sets count of repeating columns at 1fr
   */
  gridTemplateColumns: t.oneOfType([
    t.oneOf(range1_12),
    t.arrayOf(t.oneOf(range1_12)),
  ]),
  /**
   * [spacing] Applies CSS grid-gap
   */
  gridGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS grid-row-gap
   */
  gridRowGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies CSS grid-column-gap
   */
  gridColumnGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Applies CSS grid column span
   */
  gridColumn: t.oneOfType([t.oneOf(range1_12), t.arrayOf(t.oneOf(range1_12))]),
}

Box.displayName = 'Box'

export default Box
