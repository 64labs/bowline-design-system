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
          {Object.keys(theme.foregroundColors).map(colorName => (
            <Box key={`fg-${colorName}`} align="center">
              <Inline space="small">
                <Box size="xxlarge" background={colorName} />
                <Text size="small" weight="medium">
                  {colorName}
                </Text>
              </Inline>
            </Box>
          ))}
        </Columns>
      </Stack>

      <Stack space="medium">
        <Text size="large" weight="strong">
          Background Colors
        </Text>

        <Columns cols={[1, 2]}>
          {Object.keys(theme.backgroundColors).map(colorName => (
            <Box key={`fg-${colorName}`} align="center">
              <Inline space="small">
                <Box size="xxlarge" background={colorName} />
                <Text size="small" weight="medium">
                  {colorName}
                </Text>
              </Inline>
            </Box>
          ))}
        </Columns>
      </Stack>
    </Stack>
  )
}

export default ThemeViewer
