import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'
import './radio.css'

const Radio = ({
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
        'u-input--radio',
        `u-input--radio--${size}`,
        {'u-input--disabled': props.disabled, [`u-input--tone-${tone}`]: tone},
        className
      )}
      {...wrapperProps}
    >
      <Inline
        as="label"
        space="small"
        htmlFor={props.id || `input_${props.name}_${props.value}`}
      >
        <input
          id={props.id || `input_${props.name}_${props.value}`}
          type="radio"
          {...props}
        />
        <Text>{label}</Text>
      </Inline>
    </Box>
  )
}

export default Radio
