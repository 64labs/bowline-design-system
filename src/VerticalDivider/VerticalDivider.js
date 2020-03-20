import React from 'react'
import cx from 'classnames'
import t from 'prop-types'
import Box from '../Box/Box'
import './verticaldivider.css'
import * as types from '../types'
const VerticalDivider = ({tone = 'subtle', className, size, ...props}) => {
  const classes = cx(className, `u-vertical-divider--${tone}`)
  return (
    <Box
      aria-hidden
      height={size}
      minHeight={size ? undefined : 'smallish'}
      className={classes}
      {...props}
    />
  )
}

VerticalDivider.propTypes = {
  /**
   * The color tone of the border
   */
  tone: t.string,
  /**
   * Defines the Height of the Vertical Divider
   */
  size: types.spacing,
}

VerticalDivider.displayName = 'VerticalDivider'

export default VerticalDivider
