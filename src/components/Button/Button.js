import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {useVariants} from '../../Provider'
import Box from '../Box/Box'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import styles from './button.module.css'

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

const getIconSize = (size) => {
  return {
    small: 'largeish',
    regular: 'xlarge',
    large: 'xxlarge',
  }[size]
}

const getHeight = (size) => {
  return {
    small: 'largeish',
    regular: 'xlarge',
    large: 'xxlarge',
  }[size]
}

const Button = React.forwardRef((_props, ref) => {
  const {
    className,
    weight,
    size,
    icon,
    iconRight,
    iconSize,
    innerJustify,
    justify,
    loading,
    textProps,
    children,
    ...props
  } = useVariants('Button', _props)

  const hasChildren = React.Children.count(children) > 0
  const iconOnly = !hasChildren && (icon || iconRight)

  const paddings = {
    small: {x: 'small', y: 'xsmall'},
    regular: {x: 'gutter', y: 'smallish'},
    large: {x: 'medium', y: 'small'},
  }

  const fontSizes = {
    small: 'small',
    regular: 'standard',
    large: 'large',
  }

  let paddingX = paddings[size].x

  const text = hasChildren && (
    <Text
      as="div"
      baseline={true}
      size={fontSizes[size]}
      tone={props.tone || (weight === 'link' ? 'link' : 'neutral')}
      align="center"
      weight="regular"
      display={children.props && children.props.display}
      block
      {...textProps}
    >
      {children}
    </Text>
  )

  return (
    <Box
      className={className}
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
      width={props.width || (iconOnly ? getIconSize(size) : 'full')}
      type="button"
      {...props}
    >
      <Box
        className="u-button__inner"
        display="flex"
        align="center"
        justify={innerJustify ? 'space-between' : justify}
        height={
          props.height || (iconOnly ? getIconSize(size) : getHeight(size))
        }
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
})

Button.displayName = 'Button'

Button.defaultProps = {
  weight: 'regular',
  size: 'regular',
  iconSize: 'small',
  justify: 'center',
  innerJustify: false,
  loading: false,
}

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
   * Allows for any justify-content value on the inner content.
   */
  justify: t.oneOfType([
    t.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-around',
      'space-between',
      'stretch',
    ]),
    t.arrayOf(
      t.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-between',
        'stretch',
      ])
    ),
  ]),
  /**
   * Justifies/spaces text and icon at each end (space-between). Same as `justify="space-between"`.
   */
  innerJustify: t.bool,
  /**
   * Used to switch between the button contents and a loading spinner (not yet implemeted)
   */
  loading: t.bool,
  /**
   * Props passed to inner `Text` component
   */
  textProps: t.object,
}

export default Button
