import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './divider.css'

const Divider = ({tone = 'subtle', className, ...props}) => {
  return (
    <Box
      aria-hidden
      className={cx(`u-divider-${tone}`, className)}
      {...props}
    />
  )
}

export default Divider
