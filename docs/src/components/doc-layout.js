import React from "react"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import {
  ContentBlock,
  Box,
  Text,
  Stack,
  Inline,
  Icon,
} from "@64labs/bowline-design-system"
import DefaultLayout from "./default-layout"
import Showcase from "./Showcase"
import PropsTable from "./PropsTable"

const shortcodes = { Showcase }

const DocLayout = props => {
  if (props.path === "/components/") {
    return <DefaultLayout {...props} />
  }

  const { children, metadata = {}, component } = props

  const {
    name,
    description,
    inheritBoxProps,
    element,
    elementAttributesUrl,
  } = metadata

  return (
    <ContentBlock width="large" paddingY={["xlarge", "xxlarge"]}>
      <Helmet>
        <title>{name} | Bowline Design System</title>
      </Helmet>

      <Stack space="xlarge">
        <Stack align="flex-start" space="medium">
          <Text heading size="xlarge" weight="strong">
            {name}
          </Text>
          <Text>{description}</Text>
        </Stack>

        <Stack space="xxlarge">
          {children && (
            <MDXProvider components={shortcodes}>
              <Stack>{children}</Stack>
            </MDXProvider>
          )}

          <PropsTable component={component} />

          {/* <Stack space="small" background="subtle" padding="gutter">
              {inheritBoxProps && (
                <Inline space="xsmall">
                  <Icon name="info" size="small" />
                  <Text>
                    Accepts all props from{" "}
                    <Text
                      as={Link}
                      tone="link"
                      to="/components/box"
                      baseline={false}
                    >
                      {`<Box />`}
                    </Text>
                  </Text>
                </Inline>
              )}
              {element && elementAttributesUrl && (
                <Inline space="xsmall">
                  <Icon name="info" size="small" />
                  <Text>
                    All other props are passed as attributes to the underlying{" "}
                    <Text
                      as="a"
                      target="__blank"
                      tone="link"
                      href={elementAttributesUrl}
                      baseline={false}
                    >
                      {element}
                    </Text>
                  </Text>
                </Inline>
              )}
            </Stack> */}
        </Stack>
      </Stack>
    </ContentBlock>
  )
}

export default DocLayout
