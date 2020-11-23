import React, {useCallback, useRef, useState, useEffect} from 'react'
import t from 'prop-types'
import {useSpring, animated} from 'react-spring'
import Box from '../Box/Box'

const _useIntersectionObserver = (options = {}) => {
  const targetRef = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!window.IntersectionObserver) {
      return null
    }
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true)
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
        ...options,
      }
    )
    observer.observe(targetRef.current)
    return () => {
      if (typeof observer.unobserve === 'function') {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])
  return [targetRef, inView]
}

const useImageLoadState = (args) => {
  const imageRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const loadCallback = useCallback(() => setLoaded(true))

  useEffect(() => {
    if (!imageRef || !imageRef.current) {
      return
    }
    if (imageRef.current.complete) {
      setLoaded(true)
    } else {
      setLoaded(false)
      imageRef.current.addEventListener('load', loadCallback)
      return () => imageRef.current.removeEventListener('load', loadCallback)
    }
  }, [...args])

  return [imageRef, loaded]
}

const useLazyImage = (opts = {}, args) => {
  const [viewRef, inView] = _useIntersectionObserver(opts)
  const [imageRef, loaded] = useImageLoadState([inView, ...args])
  return {viewRef, inView, imageRef, loaded}
}

const Image = ({
  src,
  alt,
  srcSet,
  sizes,
  imageProps,
  fluid,
  width = '100%',
  height = '100%',
  lazy = true,
  springConfig = () => ({}),
  onRest = () => {},
  onLoad = () => {},
  ...props
}) => {
  const {viewRef, imageRef, inView, loaded} = useLazyImage(
    {rootMargin: '200px'},
    [src]
  )

  const ready = !lazy || (loaded && inView)

  const _springConfig = {
    opacity: ready ? 1 : 0,
    width: fluid ? '100%' : width,
    config: {
      tension: 500,
      friction: 30,
    },
    immediate: !lazy,
    onRest: () => onRest({loaded, ready}),
  }

  const style = useSpring({
    ..._springConfig,
    ...springConfig(ready),
  })

  useEffect(() => {
    if (loaded) {
      onLoad()
    }
  }, [loaded])

  const aspectRatio = (height / width) * 100

  return (
    <animated.div style={style}>
      <Box
        position="relative"
        overflow="hidden"
        ref={viewRef}
        style={{paddingTop: `${aspectRatio}%`}}
        {...props}
      >
        <Box
          as="img"
          display="block"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          width="full"
          height="full"
          maxWidth="full"
          ref={imageRef}
          alt={alt || ''}
          src={!lazy || inView ? src : undefined}
          srcSet={!lazy || inView ? srcSet : undefined}
          sizes={sizes}
          {...imageProps}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img src="${src}" alt="${alt}" style="display: block; max-width: 100%;" />`,
          }}
        ></noscript>
      </Box>
    </animated.div>
  )
}

Image.propTypes = {
  /**
   * The image src HTML attribute
   */
  src: t.string,
  /**
   * The image alt HTML attribute
   */
  alt: t.string,
  /**
   * The image srcset HTML attribute
   */
  srcSet: t.string,
  /**
   * The image sizes HTML attribute
   */
  sizes: t.string,
  /**
   * Additional HTML attributes to pass to the img element
   */
  imageProps: t.any,
  /**
   * If true, the image fills its container width-wise while maintaining the aspect ratio from width/height
   */
  fluid: t.bool,
  /**
   * If true, uses IntersectionObserver to prevent loading until entering the viewport
   */
  lazy: t.bool,
  /**
   * Sets the width of the image. If 'fluid' is true, width is used to calculate the aspect ratio
   */
  width: t.oneOfType([t.string, t.number]),
  /**
   * Sets the height of the image. If 'fluid' is true, height is used to calculate the aspect ratio
   */
  height: t.oneOfType([t.string, t.number]),
  /**
   * Custom function to control fade-in animation when `lazy` is true
   */
  springConfig: t.func,
  /**
   * callback fired when image is loaded
   */
  onLoad: t.func,
  /**
   * callback when animations comes to a rest
   */
  onRest: t.func,
}

export default Image
