import React, {useState, useEffect, useCallback} from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import FieldMessage from '../FieldMessage/FieldMessage'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import styles from '../Input/input.module.css'

const Select = ({
  label,
  className,
  onChange,
  children,
  outline,
  tone,
  message,
  defaultSelectionProps,
  ...props
}) => {
  const [isEmpty, setIsEmpty] = useState(!props.value)

  const handleChange = useCallback(
    (e) => {
      if (e.target.value) {
        setIsEmpty(false)
      } else {
        setIsEmpty(true)
      }
      if (onChange) {
        onChange(e)
      }
    },
    [onChange]
  )

  useEffect(() => {
    if (props.value && isEmpty) {
      setIsEmpty(false)
    }
  }, [props.value, isEmpty, setIsEmpty])

  return (
    <Box
      className={cx(
        styles.input,
        {
          [styles.empty]: isEmpty || props.value === '',
          [styles.outline]: outline,
          [styles[tone]]: tone,
        },
        className
      )}
    >
      <Text
        as="label"
        htmlFor={props.id || `input_${props.name}`}
        size="small"
        tone={isEmpty || outline ? 'neutral' : 'secondary'}
      >
        <span>{label || ' '}</span>
      </Text>

      <Box position="relative">
        <select
          id={props.id || `input_${props.name}`}
          onChange={handleChange}
          {...props}
        >
          <option value="" hidden {...defaultSelectionProps}></option>
          {children}
        </select>

        <Icon name="chevron-down" size="small" className={styles.chevron} />
      </Box>

      {message && (
        <FieldMessage marginTop="xsmall" tone={tone} message={message} />
      )}
    </Box>
  )
}

export default Select
