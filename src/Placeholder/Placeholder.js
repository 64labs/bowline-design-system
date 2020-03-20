import React from 'react'
import Box from '../Box/Box'
import './placeholder.css'

const Placeholder = ({height, width, text, ...props}) => {
  return (
    <Box
      className="u-placeholder"
      background="subtle"
      justify="center"
      {...props}
      style={{width, height, padding: '0 12px'}}
    >
      {text}
    </Box>
  )
}

export default Placeholder
