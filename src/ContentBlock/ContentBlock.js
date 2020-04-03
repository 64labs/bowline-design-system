import React from 'react'
import t from 'prop-types'
import {useTheme} from '../Provider'
import Box from '../Box/Box'

const ContentBlock = ({width = 'large', ...props}) => {
  const {contentWidth} = useTheme()
  return (
    <Box
      paddingX="gutter"
      marginX="auto"
      maxWidth={contentWidth[width]}
      {...props}
    />
  )
}

ContentBlock.propTypes = {
  /**
   * [contentWidth] Sets the maximum width of the element
   */
  width: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default ContentBlock
