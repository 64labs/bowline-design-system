import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import './button.css'

const bg = (weight) => {
  switch (weight) {
    case 'regular':
      return 'brand'
    case 'strong':
      return 'brandAccent'
    default:
      return 'transparent'
  }
}

const Button = React.forwardRef(
  (
    {
      className,
      weight = 'regular',
      size = 'regular',
      icon,
      iconRight,
      iconSize = 'small',
      innerJustify = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const hasChildren = React.Children.count(children) > 0
    const iconOnly = !hasChildren && (icon || iconRight)

    const classes = cx(
      'u-button',
      `u-button--weight-${weight}`,
      {
        [`u-button--size-${size}`]: size,
        [`u-button--icon-only`]: iconOnly,
      },
      className
    )

    const paddings = {
      xsmall: {x: 'small', y: 'xxsmall'},
      small: {x: 'small', y: 'xsmall'},
      regular: {x: 'gutter', y: 'smallish'},
      large: {x: 'medium', y: 'small'},
    }
    const fontSizes = {
      xsmall: 'small',
      small: 'small',
      regular: 'standard',
      large: 'large',
    }

    let paddingX = paddings[size].x
    let paddingY = paddings[size].y

    const text = hasChildren && (
      <Text
        className="u-button__text"
        as="div"
        baseline={true}
        size={fontSizes[size]}
        tone={props.tone || (weight === 'link' ? 'link' : 'neutral')}
        align="center"
        weight="regular"
        display={children.props && children.props.display}
        block
      >
        {children}
      </Text>
    )

    return (
      <Box
        ref={ref}
        as="button"
        display={props.display || 'block'}
        width={props.width || 'full'}
        border={props.border || 'none'}
        borderRadius={props.borderRadius || 'standard'}
        paddingX={props.paddingX || (!iconOnly ? paddingX : undefined)}
        boxShadow={
          props.boxShadow || (weight === 'weak' ? 'borderStandard' : undefined)
        }
        background={props.background || bg(weight)}
        className={classes}
        type="button"
        {...props}
      >
        <Box
          className="u-button__inner"
          display="flex"
          align="center"
          justify={innerJustify ? 'space-between' : 'center'}
        >
          {icon && (
            <Icon
              name={icon}
              size={iconSize}
              className={`u-icon--${icon}`}
              tone={props.tone || (weight === 'link' ? 'link' : 'neutral')}
              marginRight={hasChildren ? 'xsmall' : undefined}
            />
          )}

          {text}

          {iconRight && (
            <Icon
              name={iconRight}
              size={iconSize}
              className={`u-icon--${iconRight}`}
              tone={props.tone || (weight === 'link' ? 'link' : 'neutral')}
              marginLeft={hasChildren ? 'xsmall' : undefined}
            />
          )}
        </Box>
      </Box>
    )
  }
)

Button.displayName = 'Button'

Button.propTypes = {
  /**
   * Sets the button's overall appearance
   */
  weight: t.oneOf(['regular', 'strong', 'weak', 'link']),
  /**
   * Sets the size of the button
   */
  size: t.oneOf(['small', 'regular', 'large']),
  /**
   * Render a given icon to the left of the text
   */
  icon: t.string,
  /**
   * Render a given icon to the right of the text
   */
  iconRight: t.string,
  /**
   * [spacing] the dimensions (width/height) of the icon
   */
  iconSize: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Justifies/spaces text and icon at each end (space-between).
   */
  innerJustify: t.bool,
  /**
   * Used to switch between the button contents and a loading spinner (not yet implemeted)
   */
  loading: t.bool,
}

export default Button
