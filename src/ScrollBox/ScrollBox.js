import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import './scrollbox.css'

const ScrollBox = ({
  className,
  scrollX = false,
  scrollY = false,
  children,
  ...props
}) => {
  const classes = cx('u-scrollbox', className)

  return (
    <Box
      width="full"
      position="relative"
      overflow="hidden"
      className={classes}
      {...props}
    >
      <Box
        height="full"
        width="full"
        overflowX={scrollX ? 'scroll' : undefined}
        overflowY={scrollY ? 'scroll' : undefined}
        className="u-scrollbox__wrapper"
      >
        <Box height="full">{children}</Box>
      </Box>
    </Box>
  )
}

ScrollBox.propTypes = {
  /**
   * Sets the Scrollbox to scroll horizontally through its overflow contents
   */
  scrollX: t.bool,

  /**
   * Sets the Scrollbox to scroll vertically through its overflow contents
   */
  scrollY: t.bool,
}

export default ScrollBox
