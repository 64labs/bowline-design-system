import React, {useCallback, useRef, useState, useEffect} from 'react'
import t from 'prop-types'
import {useTransition, animated} from 'react-spring'
import Box from '../Box/Box'
import Image from '../Image/Image'

const TransitionImage = (_props) => {
  const [img, setImg] = useState(_props)
  const [loaded, setLoaded] = useState(false)

  const transitions = useTransition([img], (item) => item.src, {
    from: {position: 'absolute', opacity: 0, width: '100%'},
    enter: [{opacity: 1}],
    leave: (item) => async (next, cancel) => {
      await next({opacity: 1})
      await next({opacity: 0})
    },
    config: {mass: 1, tension: 210, friction: 20},
  })

  return (
    <Ratio position="relative" ratio={_props.height / _props.width}>
      {transitions.map(({item, key, props}) => (
        <animated.div style={props} key={key}>
          <Image {...item} />
        </animated.div>
      ))}
    </Ratio>
  )
}

const Ratio = ({ratio, children, paddingTop, ...props}) => {
  return (
    <Box
      height="none"
      overflow="hidden"
      position="relative"
      {...props}
      style={{paddingTop: paddingTop || `${ratio * 100}%`}}
    >
      <Box position="absolute" top="0" left="0" width="full" height="full">
        {children}
      </Box>
    </Box>
  )
}

export default TransitionImage
