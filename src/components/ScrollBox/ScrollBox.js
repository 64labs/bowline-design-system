import React from 'react'
import t from 'prop-types'
import Box from '../Box/Box'
import styles from './scrollbox.module.css'

const ScrollBox = ({
  className,
  scrollX = false,
  scrollY = false,
  children,
  ...props
}) => {
  return (
    <Box
      width="full"
      position="relative"
      overflow="hidden"
      className={className}
      {...props}
    >
      <Box
        height="full"
        width="full"
        overflowX={scrollX ? 'scroll' : undefined}
        overflowY={scrollY ? 'scroll' : undefined}
        className={styles.scrollboxInner}
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
