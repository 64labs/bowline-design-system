import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import './checkbox.css'

const Checkbox = ({
  label,
  tone,
  size = 'regular',
  className,
  wrapperProps,
  ...props
}) => {
  return (
    <Box
      className={cx(
        'u-input--checkbox',
        `u-input--checkbox--${size}`,
        {'u-input--disabled': props.disabled, [`u-input--tone-${tone}`]: tone},
        className
      )}
      {...wrapperProps}
    >
      <Inline
        as="label"
        space="small"
        htmlFor={props.id || `input_${props.name}`}
      >
        <Box position="relative">
          <input
            id={props.id || `input_${props.name}`}
            type="checkbox"
            {...props}
          />
          <Icon
            name="check"
            className="u-input--checkbox__check"
            size="small"
          />
        </Box>

        <Text>{label}</Text>
      </Inline>
    </Box>
  )
}

export default Checkbox
