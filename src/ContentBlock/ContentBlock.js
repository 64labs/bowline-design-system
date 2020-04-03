import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {responsiveClassnames} from '../util/index'
import {useTheme} from '../Provider'
import Box from '../Box/Box'

const ContentBlock = ({width = 'large', className, ...props}) => {
  const theme = useTheme()
  const classes = cx(
    responsiveClassnames(theme.breakpoints, width, 'content-width'),
    className
  )
  return <Box className={classes} paddingX="gutter" marginX="auto" {...props} />
}

ContentBlock.propTypes = {
  /**
   * [contentWidth] Sets the maximum width of the element
   */
  width: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default ContentBlock
