import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import {
  ContentBlock,
  Box,
  Inline,
  Text,
  Stack,
} from "@64labs/bowline-design-system"
import CodeBlock from "./code-block"

const textWithProps = textProps => props => <Text {...props} {...textProps} />

const components = {
  Text,
  Stack,
  Box,
  Inline,
  h1: textWithProps({
    as: "h1",
    heading: true,
    size: "xlarge",
    weight: "strong",
    marginBottom: ["gutter", "large"],
  }),
  h2: textWithProps({
    as: "h2",
    heading: true,
    size: "large",
    weight: "strong",
    marginTop: ["small", "gutter"],
    marginBottom: ["small", "gutter"],
  }),
  h3: textWithProps({
    as: "h3",
    heading: true,
    size: "standard",
    weight: "medium",
  }),
  h4: textWithProps({
    as: "h4",
    heading: true,
    size: "small",
    weight: "strong",
  }),
  h5: textWithProps({
    as: "h5",
    heading: true,
    size: "xsmall",
    weight: "strong",
  }),
  p: textWithProps({ marginBottom: ["small", "gutter"] }),
  ul: props => (
    <Stack
      space="smallish"
      as="ul"
      marginBottom={["small", "gutter"]}
      className="bullets"
      {...props}
    />
  ),
  li: textWithProps({ as: "li" }),
  code: props => (
    <Box marginBottom={["small", "gutter"]}>
      <CodeBlock {...props} />
    </Box>
  ),
}

const DefaultLayout = ({ children, metadata = {}, ...props }) => {
  const title = props.pageContext.frontmatter.title || metadata.title

  return (
    <Box
      paddingY={["xlarge", "xxlarge"]}
      style={{ maxWidth: 680, margin: "0 auto" }}
    >
      <Helmet>
        <title>{title || "MDX Page"} | Bowline Design System</title>
      </Helmet>

      {children && (
        <MDXProvider components={components}>
          <Stack>{children}</Stack>
        </MDXProvider>
      )}
    </Box>
  )
}

export default DefaultLayout
