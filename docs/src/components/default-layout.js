import React from "react"
import Helmet from "react-helmet"
import MDXProvider from "./MDXProvider"
import { ContentBlock, Stack } from "@64labs/bowline-design-system"

const DefaultLayout = ({ children, metadata = {}, ...props }) => {
  const title = props.pageContext.frontmatter.title || metadata.title

  return (
    <ContentBlock width="medium" paddingY={["xlarge", "xxlarge"]}>
      <Helmet>
        <title>{title || "MDX Page"} | Bowline Design System</title>
      </Helmet>

      {children && (
        <MDXProvider>
          <Stack>{children}</Stack>
        </MDXProvider>
      )}
    </ContentBlock>
  )
}

export default DefaultLayout
