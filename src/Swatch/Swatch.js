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
  const classes = cx({'swatch-selected': selected}, className)

  return (
    <Box
      className={classes}
      role="button"
      padding={!selected ? 'nudge2' : 'nudge1'}
      border={!selected ? 'standard' : undefined}
      borderColor={!selected ? 'subtle' : undefined}
      position="relative"
      aria-label={name}
      size={size}
      borderRadius="half"
      {...props}
    >
      <Box className="u-swatch__inner" overflow="hidden" borderRadius="half">
        {children}
      </Box>
    </Box>
  )
}

export default Swatch
