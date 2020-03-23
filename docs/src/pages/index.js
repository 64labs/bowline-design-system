import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Button,
  ContentBlock,
  Inline,
  Stack,
  Text,
} from "@64labs/bowline-design-system"

const IndexPage = () => (
  <Box>
    <Stack
      space="xlarge"
      paddingX="gutter"
      paddingY={["medium", "large", "xxlarge"]}
      style={{ maxWidth: 680, width: "100%" }}
    >
      <Stack>
        <Text as="h1" heading size="xlarge" weight="strong">
          For hopefully uncomplicated user interfaces.
        </Text>
        <Text size="xlarge">
          Bowline is lightweight, responsive, themeable design system for
          ordinary or ambitious React projects.
        </Text>
      </Stack>

      <Inline>
        <Button as={Link} to="/getting-started/" weight="strong">
          Get started
        </Button>
      </Inline>
    </Stack>
  </Box>
)

export default IndexPage
