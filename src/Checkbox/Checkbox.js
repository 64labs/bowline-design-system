import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import styles from './checkbox.module.css'

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
        styles.checkbox,
        styles[`checkbox-${size}`],
        {
          [styles.disabled]: props.disabled,
          [styles[tone]]: tone,
        },
        className
      )}
      {...wrapperProps}
    >
      <Box
        as="label"
        display="flex"
        alignItems="center"
        htmlFor={props.id || `input_${props.name}`}
      >
        <Box position="relative" marginRight="small">
          <input
            id={props.id || `input_${props.name}`}
            type="checkbox"
            {...props}
          />
          <Icon name="check" className={styles.checkIcon} size="small" />
        </Box>

        <Text>{label}</Text>
      </Box>
    </Box>
  )
}

Checkbox.propTypes = {
  /**
   * Sets the input label
   */
  label: t.string.isRequired,
  /**
   * Sets the size of the checkbox
   */
  size: t.oneOf(['small', 'regular', 'large']),
  /**
   * [colors.foreground] Sets the accent color
   */
  tone: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default Checkbox
