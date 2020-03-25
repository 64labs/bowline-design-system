import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { Box, Inline, Text, Stack } from "@64labs/bowline-design-system"
import CodeBlock from "./code-block"

const textWithProps = textProps => props => (
  <Box>
    <Text {...props} {...textProps} />
  </Box>
)

const components = {
  Text,
  Stack,
  Box,
  Inline,
  Info: props => (
    <Box
      padding="small"
      marginBottom={["small", "gutter"]}
      style={{
        background: "#fff5fb",
        borderLeft: `4px solid #d80a86`,
        borderRadius: 4,
      }}
    >
      <Text {...props} />
    </Box>
  ),
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
    marginBottom: ["small", "small"],
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
  p: textWithProps({ marginBottom: ["small", "small"] }),
  a: props => (
    <Text
      as="a"
      {...props}
      baseline={false}
      style={{ textDecoration: "underline" }}
      tone="brandAccent"
    />
  ),
  ul: props => (
    <Stack
      space="smallish"
      as="ul"
      marginBottom={["small", "small"]}
      className="bullets"
      {...props}
    />
  ),
  li: textWithProps({ as: "li" }),
  code: props => (
    <Box marginBottom={["small", "small"]}>
      <CodeBlock {...props} />
    </Box>
  ),
  blockquote: props => (
    <Box
      paddingY="xxsmall"
      paddingLeft="small"
      marginBottom={["small", "small"]}
      style={{ borderLeft: "3px solid #DDD" }}
    >
      <Text className="foo" as="blockquote" block>
        {props.children.props.children}
      </Text>
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
