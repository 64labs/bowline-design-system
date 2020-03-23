import React, { useState } from "react"
import { useLocation } from "@reach/router"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import {
  Box,
  Button,
  Columns,
  ContentBlock,
  Inline,
  ScrollBox,
  Column,
  Divider,
  VerticalDivider,
  Text,
  Icon,
} from "@64labs/bowline-design-system"
import NavDrawer from "./NavDrawer"
import Navigation from "./Navigation"
import "./layout.css"

const Layout = ({ children, ...props }) => {
  const { pathname } = useLocation()
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen)

  const isHome = pathname === "/"

  return (
    <>
      <Helmet>
        <title>Bowline Design System</title>
      </Helmet>

      <Box
        display="flex"
        align="center"
        justify="space-between"
        paddingY={["xsmall", "xsmall", "xsmall"]}
        paddingLeft={["xsmall", "xsmall", "gutter"]}
        paddingRight={["xsmall", "xsmall", "gutter"]}
        position={["sticky", "sticky", "relative"]}
        background="white"
        style={{
          top: 0,
          zIndex: 3,
          boxShadow: "0 1px 0px #eee",
        }}
      >
        <Inline space="xsmall">
          <Button
            display={["block", "block", "none"]}
            icon="menu"
            iconSize="gutter"
            aria-label="menu"
            background="transparent"
            tone="neutral"
            onClick={toggleNavDrawer}
          />
          <Text heading weight="strong" size="standard" as={Link} to="/" block>
            Bowline
          </Text>
        </Inline>
        <Button
          as="a"
          aria-label="github"
          href="https://github.com/64labs/bowline-design-system"
          icon="github"
          iconSize="gutter"
          background="transparent"
          tone="neutral"
        />
      </Box>

      {!isHome ? (
        <Columns cols={6} gap="none" align="stretch">
          <Column span={1} display={["none", "none", "block"]}>
            <Box display="flex" height="full">
              <Box style={{ flex: 1, paddingTop: 1 }}>
                <ScrollBox scrollY className="content-area">
                  <Navigation />
                </ScrollBox>
              </Box>
              <VerticalDivider />
            </Box>
          </Column>

          <Column span={[6, 6, 5]}>
            <ScrollBox scrollY className="content-area">
              <ContentBlock width="medium">{children}</ContentBlock>
            </ScrollBox>
          </Column>
        </Columns>
      ) : (
        children
      )}

      <NavDrawer isOpen={navDrawerOpen} close={() => setNavDrawerOpen(false)} />
    </>
  )
}

export default Layout
