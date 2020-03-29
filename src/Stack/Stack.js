import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import Box from '../Box/Box'
import Divider from '../Divider/Divider'

const Stack = ({
  space = 'gutter',
  dividers = false,
  className,
  children,
  ...props
}) => {
  const classes = cx(className)

  return (
    <Box
      className={classes}
      display="flex"
      flexDirection="column"
      align="stretch"
      justify="flex-start"
      {...props}
    >
      {React.Children.toArray(children)
        .filter((i) => i)
        .map((child, i) => {
          return (
            <React.Fragment key={child.key}>
              {i > 0 && dividers && (
                <Divider
                  {...(child.props.display && {display: child.props.display})}
                  {...(child.props.alignSelf && {
                    alignSelf: child.props.alignSelf,
                  })}
                  marginTop={space}
                  width="full"
                  className="_stack-item _stack-divider"
                />
              )}

              <Box
                {...(child.props.display && {display: child.props.display})}
                {...(child.props.alignSelf && {
                  alignSelf: child.props.alignSelf,
                })}
                marginTop={i > 0 ? space : undefined}
                maxWidth="full"
                className="_stack-item"
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
   * [spacing] Applies spacing between child elements
   */
  space: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Render a divider between elements
   */
  dividers: t.bool,
}

export default Stack
