import React, { useState, useEffect } from "react"
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

const Section = ({
  title,
  pathname,
  sectionPath,
  onNavigate,
  isOpen,
  pages,
  closeSection,
  openSection,
}) => {
  return (
    <Box
      className={cx({
        "active-nav-section": pathname.includes(sectionPath),
      })}
    >
      <Box display="flex">
        <Button
          className={cx("nav-link", {
            "selected-nav-link": pathname === sectionPath,
          })}
          as={Link}
          to={sectionPath}
          onClick={onNavigate}
          innerJustify
          background="transparent"
        >
          <Text
            as="span"
            size="small"
            weight={pathname.includes(sectionPath) ? "medium" : "regular"}
            tone={pathname.includes(sectionPath) ? "brandAccent" : "neutral"}
          >
            {title}
          </Text>
        </Button>
        <Button
          className="nav-link nav-link-expander"
          icon={isOpen(sectionPath) ? "minus" : "plus"}
          tone="neutral"
          background="transparent"
          onClick={() =>
            isOpen(sectionPath)
              ? closeSection(sectionPath)
              : openSection(sectionPath)
          }
          style={{ flexShrink: 0 }}
        />
      </Box>

      <Box display={isOpen(sectionPath) ? "block" : "none"}>
        <Box as="ul">
          {pages.map(pg => {
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
  )
}

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
      themingSection: allSitePage(filter: { path: { glob: "/theming/*" } }) {
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

        <Section
          title="Theming"
          pathname={pathname}
          sectionPath="/theming/"
          pages={data.themingSection.nodes}
          isOpen={isOpen}
          openSection={openSection}
          closeSection={closeSection}
          onNavigate={onNavigate}
        />

        <Section
          title="Components"
          pathname={pathname}
          sectionPath="/components/"
          pages={data.components.nodes}
          isOpen={isOpen}
          openSection={openSection}
          closeSection={closeSection}
          onNavigate={onNavigate}
        />
      </Stack>

      <Divider />
    </Box>
  )
}

export default Navigation
