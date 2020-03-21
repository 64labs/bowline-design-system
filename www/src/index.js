import 'focus-visible'
import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {MDXProvider} from '@mdx-js/react'
import {
  BowlineProvider,
  Box,
  Columns,
  ContentBlock,
  Column,
  Divider,
  Stack,
  Text,
  Icon,
  Inline,
} from '@64labs/bowline-design-system'
import theme from '@64labs/bowline-design-system/themes/baseTheme'
import DocLayout from './components/DocLayout'
import ComponentRoutes from './components/ComponentRoutes'
import './index.css'

const docPages = [
  'Box',
  'Button',
  'Checkbox',
  'Columns',
  'Column',
  'ContentBlock',
  'Icon',
  'Image',
  'Inline',
  'Input',
  'Radio',
  'ScrollBox',
  'Stack',
  'Select',
  'Text',
  'VerticalDivider',
  'Textarea',
]

var svgIcons = require.context(
  '@64labs/bowline-design-system/icons',
  false,
  /.*\.svg$/
)
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}
requireAll(svgIcons)

const mdxComponents = {
  wrapper: DocLayout,
  h1: (props) => <Text heading as="h1" size="xlarge" {...props} />,
  h2: (props) => <Text as="h2" weight="strong" size="large" {...props} />,
  h3: (props) => <Text as="h3" weight="strong" size="standard" {...props} />,
  h4: (props) => <Text as="h4" size="standard" weight="medium" {...props} />,
  h5: (props) => <Text heading as="h5" size="small" {...props} />,
  h6: (props) => <Text heading as="h6" size="xsmall" {...props} />,
  p: (props) => <Text {...props} />,
  li: (props) => <Text as="li" {...props} />,
}

const App = () => {
  return (
    <BowlineProvider theme={theme}>
      <Router>
        <Box paddingY="medium">
          <ContentBlock>
            <Inline justify="space-between">
              <Text heading size="standard">
                Bowline Design System
              </Text>

              <Icon name="github" />
            </Inline>
          </ContentBlock>
        </Box>

        <Stack space="large">
          <Divider />

          <ContentBlock>
            <Columns cols={5} gap="xlarge">
              <Column span={1}>
                <Stack space="large" dividers>
                  {/* <Stack as="nav">
                  <Text weight="strong">Get Started</Text>
                  <Stack as="ul">
                    <li>
                      <Text as={Link} to="/motivation" block>
                        Motivation
                      </Text>
                    </li>
                  </Stack>
                </Stack> */}

                  <Stack as="nav">
                    <Text weight="strong">Components</Text>
                    <Stack as="ul">
                      {docPages.map((page) => (
                        <li key={page}>
                          <Text
                            as={Link}
                            to={`/components/${page.toLowerCase()}`}
                            block
                          >
                            {page}
                          </Text>
                        </li>
                      ))}
                    </Stack>
                  </Stack>
                </Stack>
              </Column>

              <Column span={4}>
                <Switch>
                  <MDXProvider components={mdxComponents}>
                    <Route path="/components/:componentName">
                      <ComponentRoutes />
                    </Route>
                  </MDXProvider>
                </Switch>
              </Column>
            </Columns>
          </ContentBlock>
        </Stack>
      </Router>
    </BowlineProvider>
  )
}

var mountNode = document.getElementById('app')
render(<App />, mountNode)
