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
      flexGrow,
      flexShrink,
      position,
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
      flexGrow,
      flexShrink,
      position,
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

Box.propTypes = {
  /**
   * Renders the given component or element
   */
  as: t.any,
  /**
   * Sets the background color
   */
  background: t.string,
  /**
   * Adds the given class name
   */
  className: t.string,
  /**
   * Sets the display rule.
   */
  display: types.display,
  /**
   * Applies padding to all sides
   */
  padding: types.spacing,
  /**
   * Applies padding to the top
   */
  paddingTop: types.spacing,
  /**
   * Applies padding to the right
   */
  paddingRight: types.spacing,
  /**
   * Applies padding to the bottom
   */
  paddingBottom: types.spacing,
  /**
   * Applies padding to the left
   */
  paddingLeft: types.spacing,
  /**
   * Applies padding to the left and right
   */
  paddingX: types.spacing,
  /**
   * Applies padding to the top and bottom
   */
  paddingY: types.spacing,
  /**
   * Applies margin to all sides
   */
  margin: types.spacing,
  /**
   * Applies margin to the top
   */
  marginTop: types.spacing,
  /**
   * Applies margin to the right
   */
  marginRight: types.spacing,
  /**
   * Applies margin to the bottom
   */
  marginBottom: types.spacing,
  /**
   * Applies margin to the left
   */
  marginLeft: types.spacing,
  /**
   * Applies margin to the left and right
   */
  marginX: types.spacing,
  /**
   * Applies margin to the top and bottom
   */
  marginY: types.spacing,
  /**
   * Sets the CSS position
   */
  position: types.position,
  /**
   * Applies flex alignment to children (only applies to flex display)
   */
  align: types.alignItems,
  /**
   * Applies flex justification to children (only applies to flex display)
   */
  justify: types.justifyContent,
  /**
   * Sets the width and height equally
   */
  size: types.spacing,
  /**
   * Applies shadow styles and/or borders
   */
  boxShadow: t.string,
  /**
   * Defines overflow behavior on X and Y axis
   */
  overflow: types.overflow,
  /**
   * Defines overflow behavior on X axis
   */
  overflowX: types.overflow,
  /**
   * Defines overflow behavior on Y axis
   */
  overflowY: types.overflow,
  /**
   * Applies a set height
   */
  height: types.spacing,
  /**
   * Applies a set width
   */
  width: types.spacing,
  /**
   * Applies flex wrapping (only applies to flex display)
   */
  wrap: t.bool,
  /**
   * Applies flex grow value
   */
  flexGrow: t.number,
}

Box.displayName = 'Box'

export default Box
