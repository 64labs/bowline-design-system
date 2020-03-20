import React, {useState, useCallback, useEffect} from 'react'
import t from 'prop-types'
import * as types from '../types'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import FieldMessage from '../FieldMessage/FieldMessage'
import './textarea.css'

const Textarea = ({
  label,
  className,
  message,
  tone = 'neutral',
  onChange,
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
        'u-input',
        'u-input--textarea',
        'u-input--outline',
        {
          'u-input--empty': isEmpty,
          [`u-input--tone-${tone}`]: tone,
        },
        className
      )}
    >
      <Text as="label" htmlFor={props.id || `input_${props.name}`} size="small">
        <span>{label || ' '}</span>
      </Text>

      <Box
        as="textarea"
        id={props.id || `input_${props.name}`}
        onChange={handleChange}
        {...props}
      />

      {message && (
        <FieldMessage tone={tone} message={message} marginTop="xsmall" />
      )}
    </Box>
  )
}

Textarea.propTypes = {
  /**
   * Renders a message below the field. Useful for validation.
   */
  message: t.string,
  /**
   * Controls the style of the given message prop.
   */
  tone: t.oneOf(['critical', 'positive', 'neutral']),
}

export default Textarea
