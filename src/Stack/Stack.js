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

  const items = React.Children.toArray(children).filter((i) => i)

  return (
    <Box
      className={classes}
      display="flex"
      flexDirection="column"
      align="stretch"
      justify="flex-start"
      {...props}
    >
      {items.map((child, i) => {
        const marginTop =
          i === 1 ? getSpace(space, items[i - 1].props.display) : space

        return (
          <React.Fragment key={child.key}>
            {i > 0 && dividers && (
              <Divider
                {...(child.props.display && {display: child.props.display})}
                {...(child.props.alignSelf && {
                  alignSelf: child.props.alignSelf,
                })}
                marginTop={marginTop}
                width="full"
              />
            )}

            <Box
              {...(child.props.display && {display: child.props.display})}
              {...(child.props.alignSelf && {
                alignSelf: child.props.alignSelf,
              })}
              marginTop={i > 0 ? marginTop : undefined}
              maxWidth="full"
            >
              {child}
            </Box>
          </React.Fragment>
        )
      })}
    </Box>
  )
}

function getSpace(space, display) {
  if (Array.isArray(display) && !Array.isArray(space)) {
    return display.map((token) => {
      return token === 'none' ? 'none' : space
    })
  }

  if (Array.isArray(display) && Array.isArray(space)) {
    if (space.length > display.length) {
      return space.map((token, i) => {
        return display[i] === 'none' ? 'none' : token
      })
    }
    return display.map((token, i) => {
      return token === 'none' ? 'none' : space[i] || space[space.length - 1]
    })
  }

  if (!Array.isArray(display) && Array.isArray(space)) {
    return space.map((token, i) => {
      return display === 'none' ? 'none' : token
    })
  }

  if (display === 'none') {
    return 'none'
  }

  return space
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
