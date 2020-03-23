import React, { useState, useMemo, useEffect } from "react"
import cx from "classnames"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import {
  Box,
  Stack,
  Button,
  Divider,
  Text,
} from "@64labs/bowline-design-system"
import "./navigation.css"

const Navigation = ({ onNavigate }) => {
  const data = useStaticQuery(graphql`
    query pages {
      components: allSitePage(filter: { path: { glob: "/components/*" } }) {
        nodes {
          path
          context {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const { pathname } = useLocation()
  const [openSections, setOpenSections] = useState([
    `/${pathname.split("/")[1]}/`,
  ])

  useEffect(() => {
    setOpenSections(s => [`/${pathname.split("/")[1]}/`])
  }, [pathname])

  const openSection = name => setOpenSections(s => [...s, name])
  const closeSection = name => setOpenSections(s => s.filter(n => n !== name))
  const isOpen = name => openSections.includes(name)

  return (
    <Box paddingBottom="large">
      <Stack as="nav" space="none" dividers>
        <Box as="ul">
          {["Introduction", "Getting started", "Inspiration"].map(page => {
            const pagePath = `/${page.toLowerCase().replace(" ", "-")}/`
            return (
              <li key={pagePath}>
                <Button
                  className={cx("nav-link", {
                    "selected-nav-link": pathname === pagePath,
                  })}
                  as={Link}
                  position="relative"
                  innerJustify
                  background="transparent"
                  to={pagePath}
                  onClick={onNavigate}
                >
                  <Text
                    as="span"
                    size="small"
                    weight={pathname === pagePath ? "medium" : "regular"}
                    tone={pathname === pagePath ? "brandAccent" : "neutral"}
                  >
                    {page}
                  </Text>
                </Button>
              </li>
            )
          })}
        </Box>

        <Box
          className={cx({
            "active-nav-section": pathname.includes("/components/"),
          })}
        >
          <Box display="flex">
            <Button
              className={cx("nav-link", {
                "selected-nav-link": pathname === "/components/",
              })}
              as={Link}
              to="/components/"
              onClick={onNavigate}
              innerJustify
              background="transparent"
            >
              <Text
                as="span"
                size="small"
                weight={
                  pathname.includes("/components/") ? "medium" : "regular"
                }
                tone={
                  pathname.includes("/components/") ? "brandAccent" : "neutral"
                }
              >
                Components
              </Text>
            </Button>
            <Button
              className="nav-link nav-link-expander"
              icon={isOpen("/components/") ? "minus" : "plus"}
              tone="neutral"
              background="transparent"
              onClick={() =>
                isOpen("/components/")
                  ? closeSection("/components/")
                  : openSection("/components/")
              }
              style={{ flexShrink: 0 }}
            />
          </Box>

          <Box display={isOpen("/components/") ? "block" : "none"}>
            <Box as="ul">
              {data.components.nodes.map(pg => {
                return (
                  <li key={pg.path}>
                    <Button
                      className={cx("nav-link", {
                        "selected-nav-link": pathname === pg.path,
                      })}
                      as={Link}
                      position="relative"
                      innerJustify
                      background="transparent"
                      to={pg.path}
                      onClick={onNavigate}
                    >
                      <Text
                        as="span"
                        size="small"
                        weight={pathname === pg.path ? "medium" : "regular"}
                        tone={pathname === pg.path ? "brandAccent" : "neutral"}
                      >
                        {pg.context.frontmatter.title}
                      </Text>
                    </Button>
                  </li>
                )
              })}
            </Box>
          </Box>
        </Box>
      </Stack>

      <Divider />
    </Box>
  )
}

export default Navigation
