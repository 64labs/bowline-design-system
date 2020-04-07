import React from "react"
import {
  Box,
  Columns,
  Divider,
  Inline,
  Stack,
  Text,
  useTheme,
} from "@64labs/bowline-design-system"

const ThemeViewer = () => {
  const theme = useTheme()

  return (
    <Stack space="xxlarge" dividers>
      <Stack space="medium">
        <Text size="large" weight="strong">
          Foreground Colors
        </Text>

        <Columns cols={[1, 2]}>
          {Object.keys(theme.colors).map(colorName => (
            <Box key={`fg-${colorName}`} align="center">
              <Stack
                background={colorName}
                align="center"
                justify="center"
                paddingY="small"
              >
                <Text size="small" weight="medium">
                  {colorName}
                </Text>
              </Stack>
            </Box>
          ))}
        </Columns>
      </Stack>
    </Stack>
  )
}

export default ThemeViewer
