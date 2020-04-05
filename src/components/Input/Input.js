import React, {useState, useCallback, useEffect} from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import FieldMessage from '../FieldMessage/FieldMessage'
import styles from './input.module.css'

const Input = ({
  label,
  className,
  type = 'text',
  message,
  tone,
  onChange,
  outline = true,
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
          [styles.empty]: isEmpty,
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

      <Box
        as="input"
        id={props.id || `input_${props.name}`}
        type={type}
        onChange={handleChange}
        {...props}
      />

      {message && (
        <FieldMessage tone={tone} message={message} marginTop="xsmall" />
      )}
    </Box>
  )
}

Input.propTypes = {
  /**
   * Sets the HTML input type attribute
   */
  type: t.string,
  /**
   * Sets the input label
   */
  label: t.string.isRequired,
  /**
   * Renders a message below the field. Useful for validation.
   */
  message: t.string,
  /**
   * Controls the style of the given message prop.
   */
  tone: t.oneOf(['critical', 'positive', 'neutral']),
  /**
   * Render the field with full border around input
   */
  outline: t.bool,
}

export default Input
