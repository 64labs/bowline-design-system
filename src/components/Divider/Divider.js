import React from 'react'
import t from 'prop-types'
import Box from '../Box/Box'

const Divider = ({tone = 'subtle', className, ...props}) => {
  return (
    <Box
      aria-hidden
      className={className}
      borderTop="standard"
      borderColor={tone}
      {...props}
    />
  )
}

Divider.propTypes = {
  /**
   * [colors] The color tone of the border
   */
  tone: t.string,
}

export default Divider
