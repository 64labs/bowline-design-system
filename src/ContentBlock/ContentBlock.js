import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import './content-block.css'

const ContentBlock = ({width = 'large', className, ...props}) => {
  const classes = cx('u-content-block', `u-content-block--${width}`, className)

  return <Box className={classes} paddingX="gutter" {...props} />
}

ContentBlock.propTypes = {
  /**
   * [contentWidth] Sets the maximum width of the element
   */
  width: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default ContentBlock
