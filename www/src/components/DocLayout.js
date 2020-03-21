import React from 'react'
import Helmet from 'react-helmet'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {shadesOfPurple as syntaxTheme} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {Link} from 'react-router-dom'
import {
  Box,
  Button,
  Text,
  Stack,
  Inline,
  Icon,
} from '@64labs/bowline-design-system'
import PropsTable from './PropsTable'

const DocLayout = ({children, meta}) => {
  const {
    name,
    description,
    component,
    inheritBoxProps,
    element,
    elementAttributesUrl,
  } = meta

  return (
    <Stack space="xlarge" paddingY="xlarge">
      <Helmet>
        <title>{name} | Bowline Design System</title>
      </Helmet>
      <Stack align="flex-start" space="medium">
        <Text heading size="xlarge" weight="strong">
          {name}
        </Text>
        <Text>{description}</Text>

        <Box>
          <SyntaxHighlighter
            language="jsx"
            style={{
              ...syntaxTheme,
              hljs: {
                ...syntaxTheme.hljs,
                border: 'none',
                borderRadius: 4,
                padding: '12px 20px',
                lineHeight: '24px',
              },
            }}
          >{`import {${name}} from '@64labs/bowline-design-system'`}</SyntaxHighlighter>
        </Box>
      </Stack>

      <Stack space="xxlarge">
        {children && <Stack>{children}</Stack>}

        <Stack space="large">
          <Text weight="strong" size="large">
            Component Props
          </Text>

          <PropsTable component={component} />

          <Stack space="small" background="subtle" padding="gutter">
            {inheritBoxProps && (
              <Inline space="xsmall">
                <Icon name="info" size="small" />
                <Text>
                  Accepts all props from{' '}
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
                  All other props are passed as attributes to the underlying{' '}
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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DocLayout
