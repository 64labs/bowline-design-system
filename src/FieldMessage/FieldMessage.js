import React from 'react'
import Inline from '../Inline/Inline'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'

const FieldMessage = ({tone, message, ...props}) => {
  return (
    <Inline space="xsmall" {...props}>
      <Icon
        name={tone === 'critical' ? 'info' : 'check-circle'}
        size="small"
        tone={tone}
      />
      <Text tone={tone} size="small">
        {message}
      </Text>
    </Inline>
  )
}

export default FieldMessage
