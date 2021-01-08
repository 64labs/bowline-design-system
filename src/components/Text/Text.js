import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {useVariants} from '../../Provider'
import {responsiveClassnames} from '../../util'
import {useTheme} from '../../Provider'
import {useBackground} from '../../util/BackgroundContext'
import Box from '../Box/Box'

const Text = (props) => {
  const theme = useTheme()
  const backgroundContext = useBackground()

  const {
    size = 'standard',
    tone = 'neutral',
    weight = 'regular',
    align = 'left',
    family = 'default',
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
      'baseline-crop': baseline,
      'display-block': block,
      [`text-transform-${transform}`]: transform,
      [`kern-${kerning}`]: kerning,
      [`tone-${tone}-on-${background}`]: background,
      [`tone-${tone}`]: tone,
      [`weight-${family}-${weight}`]: weight !== 'regular',
    },
    `font-${family}`,
    `text-align-${align}`,
    responsiveClassnames(theme.breakpoints, size, `size-${family}`),
    className
  )

  return <Box className={classes} as="p" {...restProps} />
}

Text.defaultProps = {
  size: 'standard',
  tone: 'neutral',
  weight: 'regular',
  align: 'left',
  family: 'default',
  baseline: true,
  block: false,
}

Text.propTypes = {
  /**
   * [typography] Applies the given theme config
   */
  family: t.string,
  /**
   * [typography.[family].sizes] Set size and line-height
   */
  size: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [typography.[family].weights] Set the font weight
   */
  weight: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [colors] Set the text color
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
   * Strips space from top and bottom of text for precise alignment.
   */
  baseline: t.bool,
  /**
   * Applies block level styling
   */
  block: t.bool,
}

export default Text
