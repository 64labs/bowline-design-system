import React from 'react'
import t from 'prop-types'
import * as types from '../types'
import cx from 'classnames'
import {useBackground} from '../util/BackgroundContext'
import Box from '../Box/Box'

const Text = ({
  size = 'standard',
  tone = 'neutral',
  weight = 'regular',
  align = 'left',
  heading = false,
  baseline = true,
  block = false,
  className,
  ...props
}) => {
  const backgroundContext = useBackground()

  if (process.env.NODE_ENV === 'development' && Object.keys(props).length > 0) {
    Object.keys(props).forEach((prop) => {
      if (prop.includes('padding') || prop.includes('margin')) {
        console.warn(
          `Warning: You've added ${prop} to a Text Component, this could cause issues with the component's baseline cropping`
        )
      }
    })
  }

  const background =
    backgroundContext && backgroundContext !== 'transparent'
      ? backgroundContext
      : null

  const classes = cx(
    {
      text: !heading,
      heading: heading,
      'baseline-crop': baseline,
      'display-block': block,
      [`tone-${tone}-on-${background}`]: background,
      [`tone-${tone}`]: tone,
      [`text-weight-${weight}`]: weight !== 'regular',
      [`text-${size}`]: !heading,
      [`heading-${size}`]: heading,
    },
    `text-align-${align}`,
    className
  )

  return <Box className={classes} as="p" {...props} />
}

Text.propTypes = {
  /**
   * [textSizes] Set size and line-height
   */
  size: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [fontWeights] Set the font weight
   */
  weight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [colors.foreground] Set the text color
   */
  tone: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * Set text alignment
   */
  align: t.oneOf(['left', 'center', 'right']),
  /**
   * Use heading font styles
   */
  heading: t.bool,
  /**
   * Strips space from top and bottom of text for precise alignment.
   */
  baseline: t.bool,
  /**
   * Applies block level styling
   */
  block: t.bool,
}

export default Text
