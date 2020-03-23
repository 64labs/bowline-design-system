import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"
import { Box, Text } from "@64labs/bowline-design-system"
import "./code-block.css"

export default ({ children, className }) => {
  const language = className.replace(/language-/, "")

  return (
    <Box className="mdx-code-block" position="relative">
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={className}
            paddingTop="large"
            paddingBottom="gutter"
            paddingX="gutter"
            style={{ ...style, fontSize: 15, lineHeight: "20px" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Box>
        )}
      </Highlight>

      <Box
        position="absolute"
        background="brand"
        paddingX="xsmall"
        paddingY="xsmall"
        style={{
          top: 0,
          left: 24,
          borderRadius: "0 0 4px 4px",
        }}
      >
        <Text
          size="xsmall"
          weight="medium"
          style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}
        >
          {language}
        </Text>
      </Box>
    </Box>
  )
}
