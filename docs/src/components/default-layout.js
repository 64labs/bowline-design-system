import React from "react"
import Helmet from "react-helmet"
import MDXProvider from "./MDXProvider"
import PropsTable from "./PropsTable"
import { ContentBlock, Stack } from "@64labs/bowline-design-system"

const DefaultLayout = ({ children, component, ...props }) => {
  const { frontmatter } = props.pageContext
  const title = frontmatter && frontmatter.title
  const layoutWidth = (frontmatter && frontmatter.layout) || "medium"
  console.log(frontmatter)
  return (
    <ContentBlock width={layoutWidth} paddingY={["xlarge", "xxlarge"]}>
      <Helmet>
        <title>{title || "MDX Page"} | Bowline Design System</title>
      </Helmet>

      <Stack space="xxlarge">
        {children && (
          <MDXProvider>
            <Stack>{children}</Stack>
          </MDXProvider>
        )}

        {component && <PropsTable component={component} />}
      </Stack>
    </ContentBlock>
  )
}

export default DefaultLayout
