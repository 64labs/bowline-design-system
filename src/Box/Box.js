import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import {renderBackgroundProvider} from '../util/BackgroundContext'
import useBoxStyles from './useBoxStyles'

const Box = React.forwardRef(
  (
    {
      as = 'div',
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
      borderRadius,
      ...props
    },
    ref
  ) => {
    const boxStyles = useBoxStyles({
      as,
      background,
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
      width,
      overflow,
      overflowX,
      overflowY,
      wrap,
      flexWrap,
      gridTemplateColumns,
      gridGap,
      gridRowGap,
      gridColumnGap,
      borderRadius,
    })

    const element = React.createElement(as, {
      className: cx(boxStyles, className),
      ref,
      ...props,
    })

    return renderBackgroundProvider(background, element)
  }
)

const range1_24 = new Array(24).fill(0).map((_, i) => i + 1)

Box.propTypes = {
  /**
   * Sets the root element
   */
  as: t.any,
  /**
   * [colors.background] Applies background color
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
   * Applies CS flex-grow rule
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
   * [border.radius] Applies border-radius
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
   * [spacing] Applies a min-height
   */
  minHeight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies height
   */
  height: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies max-height
   */
  maxHeightt: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies min-width
   */
  minWidth: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies width
   */
  width: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies max-height
   */
  maxWidth: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Applies count of repeating columns at 1fr
   */
  gridTemplateColumns: t.oneOfType([
    t.oneOf(range1_24),
    t.arrayOf(t.oneOf(range1_24)),
  ]),
  /**
   * [spacing] Applies grid-gap
   */
  gridGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies grid-row-gao
   */
  gridRowGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Applies grid-column-gap
   */
  gridColumnGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

Box.displayName = 'Box'

export default Box
