import React, {useState} from 'react'
import cx from 'classnames'
import {Link, useLocation} from 'react-router-dom'
import {Box, Stack, Button, Divider, Text} from '@64labs/bowline-design-system'
import './navigation.css'

const Navigation = ({pages}) => {
  const {pathname} = useLocation()
  const [openSections, setOpenSections] = useState(['components'])

  const openSection = (name) => setOpenSections((s) => [...s, name])
  const closeSection = (name) =>
    setOpenSections((s) => s.filter((n) => n !== name))
  const isOpen = (name) => openSections.includes(name)

  return (
    <Box paddingBottom="large">
      <Stack as="nav" space="none" dividers>
        <Box className="nav-box">
          <Button
            className={'nav-item'}
            innerJustify
            iconRight={isOpen('components') ? 'minus' : 'plus'}
            background={isOpen('components') ? 'transparent' : 'white'}
            onClick={() =>
              isOpen('components')
                ? closeSection('components')
                : openSection('components')
            }
          >
            <Text
              as="span"
              size="small"
              weight={isOpen('components') ? 'strong' : 'regular'}
            >
              Components
            </Text>
          </Button>

          <Box display={isOpen('components') ? 'block' : 'none'}>
            <Box as="ul">
              {pages.map((page) => (
                <li key={page}>
                  <Button
                    className={cx('nav-item', {
                      'nav-item--selected':
                        pathname === `/components/${page.toLowerCase()}`,
                    })}
                    as={Link}
                    position="relative"
                    innerJustify
                    iconRight="NULL"
                    background="transparent"
                    to={`/components/${page.toLowerCase()}`}
                  >
                    <Text as="span" size="small">
                      {page}
                    </Text>
                  </Button>
                </li>
              ))}
            </Box>
          </Box>
        </Box>
      </Stack>

      <Divider />
    </Box>
  )
}

export default Navigation
