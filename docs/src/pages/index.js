import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Box, Button, Inline, Stack, Text } from "@64labs/bowline-design-system"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "bowline" }) {
        childImageSharp {
          fluid(maxWidth: 168) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Stack
      align="center"
      space={["medium", "medium", "large"]}
      paddingBottom="xlarge"
    >
      <Box style={{ width: 140 }} paddingX={["smallish", "none", "none"]}>
        <Image fluid={data.file.childImageSharp.fluid} />
      </Box>
      <Stack space="xlarge" paddingX="gutter" align="center">
        <Stack align="center">
          <Text
            as="h1"
            heading
            size="xlarge"
            weight="strong"
            align="center"
            style={{ maxWidth: 570 }}
          >
            For hopefully uncomplicated user interfaces
          </Text>
          <Text size="xlarge" align="center" style={{ maxWidth: 600 }}>
            Bowline is lightweight, responsive, themeable design system for
            ordinary or ambitious React projects probably.
          </Text>
        </Stack>

        <Inline>
          <Button as={Link} to="/getting-started/" weight="strong">
            Get started
          </Button>
        </Inline>
      </Stack>
    </Stack>
  )
}

export default IndexPage
