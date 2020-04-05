import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {useVariants} from '../../Provider'
import {useBackground} from '../../util/BackgroundContext'
import Box from '../Box/Box'

const Text = (props) => {
  const backgroundContext = useBackground()

  const {
    size = 'standard',
    tone = 'neutral',
    weight = 'regular',
    align = 'left',
    heading = false,
    baseline = true,
    block = false,
    transform,
    kerning,
    className,
    ...restProps
  } = useVariants('Text', props)

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
      [`text-transform-${transform}`]: transform,
      [`kern-${kerning}`]: kerning,
      [`tone-${tone}-on-${background}`]: background,
      [`tone-${tone}`]: tone,
      [`text-weight-${weight}`]: weight !== 'regular',
      [`text-${size}`]: !heading,
      [`heading-${size}`]: heading,
    },
    `text-align-${align}`,
    className
  )

  return <Box className={classes} as="p" {...restProps} />
}

Text.defaultProps = {
  size: 'standard',
  tone: 'neutral',
  weight: 'regular',
  align: 'left',
  heading: false,
  baseline: true,
  block: false,
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
   * Sets CSS text-transform
   */
  transform: t.oneOf([
    'capitalize',
    'uppercase',
    'lowercase',
    'none',
    'inherit',
  ]),
  /**
   * [letterSpacing] Sets CSS letter-spacing
   */
  kerning: t.oneOfType([t.string, t.arrayOf(t.string)]),
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