import React from 'react'
import t from 'prop-types'
import Box from '../Box/Box'

const VerticalDivider = ({tone = 'subtle', size, ...props}) => {
  return (
    <Box
      aria-hidden
      height={size}
      minHeight={size ? undefined : 'smallish'}
      borderRight="standard"
      borderColor={tone}
      {...props}
    />
  )
}

VerticalDivider.propTypes = {
  /**
   * [colors.background] The color tone of the border
   */
  tone: t.string,
  /**
   * [spacing] Defines the Height of the Vertical Divider
   */
  size: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default VerticalDivider
