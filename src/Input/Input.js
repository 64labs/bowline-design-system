import React, {useState, useCallback, useEffect} from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import FieldMessage from '../FieldMessage/FieldMessage'
import './input.css'

const Input = ({
  label,
  className,
  type = 'text',
  message,
  tone,
  onChange,
  outline,
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
        {
          'u-input--empty': isEmpty,
          'u-input--outline': outline,
          [`u-input--tone-${tone}`]: tone,
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

export default Input
