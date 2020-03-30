import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'

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
      <Box
        as="label"
        display="flex"
        alignItems="center"
        htmlFor={props.id || `input_${props.name}_${props.value}`}
      >
        <Box
          as="input"
          id={props.id || `input_${props.name}_${props.value}`}
          type="radio"
          marginRight="small"
          {...props}
        />
        <Text>{label}</Text>
      </Box>
    </Box>
  )
}

Radio.propTypes = {
  /**
   * Sets the input label
   */
  label: t.string.isRequired,
  /**
   * Sets the size of the radio
   */
  size: t.oneOf(['small', 'regular', 'large']),
  /**
   * [colors.foreground] Sets the accent color
   */
  tone: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default Radio
