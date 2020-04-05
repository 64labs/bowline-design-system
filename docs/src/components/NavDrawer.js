import React from "react"
import { createPortal } from "react-dom"
import { useTransition, useSpring, animated } from "react-spring"
import { Box, ScrollBox, Button, Divider } from "@64labs/bowline-design-system"
import Navigation from "./Navigation"

const NavDrawer = ({ isOpen, close, children, ...props }) => {
  const transitions = useTransition(isOpen, null, {
    from: {
      width: 200,
      position: "relative",
      zIndex: 1,
      opacity: 1,
      transform: "translateX(-200px)",
    },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 1, transform: "translateX(-200px)" },
    config: { mass: 1, tension: 300, friction: 32 },
  })
  const scrimStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: isOpen ? 1 : 0 },
    config: { mass: 1, tension: 210, friction: 30 },
  })

  if (typeof window === "undefined") {
    return null
  }

  return createPortal(
    transitions.map(
      ({ item, key, props }) =>
        item && (
          <Box
            key={key}
            position="fixed"
            top={0}
            bottom={0}
            left={0}
            style={{ zIndex: 999 }}
          >
            <animated.div style={scrimStyle} key={key}>
              <Box className="nav-drawer-scrim" onClick={close} />
            </animated.div>
            <animated.div style={props} key={key}>
              <ScrollBox scrollY className="nav-drawer-content">
                <Box background="white" padding="xsmall">
                  <Button
                    icon="x"
                    iconSize="gutter"
                    onClick={close}
                    background="transparent"
                    tone="neutral"
                  />
                </Box>
                <Divider />
                <Navigation onNavigate={close} />
              </ScrollBox>
            </animated.div>
          </Box>
        )
    ),
    document.getElementById("___gatsby")
  )
}

export default NavDrawer
