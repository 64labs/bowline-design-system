import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import {resolveResponsiveClassnames} from '../util'
import Box from '../Box/Box'

import './inline.css'

const Inline = ({
  space = 'gutter',
  collapseBelow,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-inline',
    resolveResponsiveClassnames('inline', space, 'space'),
    {
      'u-inline--collapse-1': collapseBelow === 'tablet',
      'u-inline--collapse-2': collapseBelow === 'desktop',
    },
    className
  )

  return (
    <Box
      className={cx(resolveResponsiveClassnames('inline', space, 'container'))}
    >
      <Box
        align="center"
        justify="flex-start"
        wrap
        className={classes}
        {...props}
      >
        {React.Children.toArray(children)
          .filter((i) => i)
          .map((child, i) => {
            return (
              <Box
                key={child.key + i}
                className="u-inline__item"
                paddingLeft={space}
                paddingTop={space}
                display={child.props && child.props.display}
                flexGrow={child.props && child.props.flexGrow}
              >
                {child}
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}

Inline.propTypes = {
  /**
   * Applies spacing between child elements
   */
  space: types.spacing,
}

export default Inline
