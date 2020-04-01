import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {responsiveClassnames} from '../util'
import {useTheme} from '../Provider'
import Box from '../Box/Box'
import VerticalDivider from '../VerticalDivider/VerticalDivider'

const Inline = ({
  space = 'gutter',
  spread,
  dividers,
  className,
  children,
  ...props
}) => {
  const theme = useTheme()

  const classes = (value, label) =>
    responsiveClassnames(theme ? theme.breakpoints : {}, value, label)

  const allClassNames = cx(
    classes(spread ? 'none' : space, 'inline'),
    className
  )

  return (
    <Box className={classes(spread ? 'none' : space, 'inline-container')}>
      <Box
        display="flex"
        align="center"
        justify="flex-start"
        wrap
        className={allClassNames}
        {...props}
      >
        {React.Children.toArray(children)
          .filter((i) => i)
          .map((child, i) => {
            return (
              <React.Fragment key={child.key + i}>
                <Box
                  paddingLeft={spread ? 'none' : space}
                  paddingTop={spread ? 'none' : space}
                  display={child.props && child.props.display}
                  flexGrow={spread ? 1 : undefined}
                  flexShrink={spread ? 1 : 0}
                  flexBasis={spread ? 0 : undefined}
                >
                  {child}
                </Box>
              </React.Fragment>
            )
          })}
      </Box>
    </Box>
  )
}

Inline.propTypes = {
  /**
   * [spacing] Applies spacing between child elements
   */
  space: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Renders child elements with equal flex grow. Overrides 'space' prop.
   */
  spread: t.bool,
}

export default Inline
