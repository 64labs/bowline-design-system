import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {resolveResponsiveClassnames} from '../util'
import Box from '../Box/Box'
import VerticalDivider from '../VerticalDivider/VerticalDivider'

const Inline = ({
  space = 'gutter',
  spread,
  dividers,
  collapseBelow,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-inline',
    resolveResponsiveClassnames('inline', spread ? 'none' : space, 'space'),
    {
      'u-inline--collapse-1': collapseBelow === 'tablet',
      'u-inline--collapse-2': collapseBelow === 'desktop',
    },
    className
  )

  return (
    <Box
      className={cx(
        resolveResponsiveClassnames(
          'inline',
          spread ? 'none' : space,
          'container'
        )
      )}
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
              <React.Fragment key={child.key + i}>
                {dividers &&
                  i !== 0 &&
                  ((child.props && child.props.display !== 'none') ||
                    !child.props) && <VerticalDivider alignSelf="stretch" />}
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
  /**
   * Render a divider between elements
   */
  dividers: t.bool,
}

export default Inline
