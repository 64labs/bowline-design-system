import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'

const Swatch = ({
  name,
  src,
  lazy = true,
  selected,
  size,
  className,
  children,
  ...props
}) => {
  const classes = cx('u-swatch', {'u-swatch--selected': selected}, className)

  return (
    <Box
      className={classes}
      role="button"
      aria-label={name}
      size={size}
      {...props}
    >
      <Box className="u-swatch__inner">{children}</Box>
    </Box>
  )
}

export default Swatch
