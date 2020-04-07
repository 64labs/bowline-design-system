import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import {
  Box,
  Inline,
  Text,
  Stack,
  Divider,
  Icon,
} from "@64labs/bowline-design-system"
import CodeBlock from "./code-block"
import Showcase from "./Showcase"

const textWithProps = textProps => props => <Text {...props} {...textProps} />

const components = {
  Text,
  Stack,
  Box,
  Inline,
  Divider,
  Link,
  Showcase,
  Icon,
  Info: props => (
    <Box
      paddingY="small"
      paddingX="small"
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
    marginBottom: ["small"],
  }),
  h2: textWithProps({
    as: "h2",
    heading: true,
    size: "large",
    weight: "medium",
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
  a: ({ href, ...restProps }) => {
    const isExternalLink = /^http/.test(href)
    const _props = { [isExternalLink ? "href" : "to"]: href, ...restProps }
    return (
      <Text
        as={isExternalLink ? "a" : Link}
        {..._props}
        baseline={false}
        style={{ textDecoration: "underline" }}
        tone="brandAccent"
      />
    )
  },
  ul: props => (
    <Box
      as="ul"
      marginBottom={["small", "small"]}
      className="bullets"
      {...props}
    />
  ),
  li: textWithProps({ as: "li", marginBottom: "small" }),
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

export default props => <MDXProvider components={components} {...props} />
