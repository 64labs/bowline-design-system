import React from 'react'
import {
  Box,
  Divider,
  Inline,
  Button,
  Stack,
  Text,
} from '@64labs/bowline-design-system'

const Showcase = ({children, playroomPath, ...props}) => {
  return (
    <Stack>
      <Stack space="xsmall">
        <Divider />
        <Box paddingY="gutter" {...props}>
          {children}
        </Box>
        <Divider />

        <Inline>
          <Button
            as="a"
            href={`https://bowline-playroom.netlify.com/${playroomPath}`}
            target="_blank"
            size="small"
            weight="weak"
            icon="layout"
          >
            Open in Playroom
          </Button>
        </Inline>
      </Stack>
    </Stack>
  )
}

export default Showcase
