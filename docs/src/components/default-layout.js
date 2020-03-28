import React from "react"
import Helmet from "react-helmet"
import MDXProvider from "./MDXProvider"
import PropsTable from "./PropsTable"
import { ContentBlock, Stack } from "@64labs/bowline-design-system"

const DefaultLayout = ({ children, metadata = {}, component, ...props }) => {
  const title = props.pageContext.frontmatter.title || metadata.title

  return (
    <ContentBlock width="medium" paddingY={["xlarge", "xxlarge"]}>
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
