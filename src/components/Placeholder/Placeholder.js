import React from 'react'
import Box from '../Box/Box'

const Placeholder = ({height, width, text, ...props}) => {
  return (
    <Box
      className="u-placeholder"
      background="subtle"
      justify="center"
      {...props}
      style={{
        width,
        height,
        padding: '0 12px',
        backgroundImage: `repeating-linear-gradient(135deg,#eeeeee,#eeeeee 5px,#e3e3e3 5px,#e3e3e3 10px)`,
      }}
    >
      {text}
    </Box>
  )
}

export default Placeholder
