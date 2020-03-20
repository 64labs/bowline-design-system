import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import Box from '../Box/Box'
import './stack.css'

const Stack = ({
  space = 'gutter',
  dividers = false,
  className,
  children,
  ...props
}) => {
  const classes = cx('u-stack', `u-stack--${space}`, className)

  return (
    <Box className={classes} align="stretch" justify="flex-start" {...props}>
      {React.Children.toArray(children)
        .filter((i) => i)
        .map((child, i) => {
          return (
            <React.Fragment key={child.key}>
              {i > 0 && dividers && (
                <Box
                  {...(child.props.display && {display: child.props.display})}
                  marginTop={space}
                  className="u-stack__divider"
                />
              )}

              <Box
                {...(child.props.display && {display: child.props.display})}
                {...(child.props.alignSelf && {
                  alignSelf: child.props.alignSelf,
                })}
                marginTop={i > 0 ? space : undefined}
                className="u-stack__item"
              >
                {child}
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

Stack.propTypes = {
  /**
   * Applies spacing between child elements
   */
  space: types.spacing,
  /**
   * Render a divider between elements
   */
  dividers: t.bool,
}

export default Stack
