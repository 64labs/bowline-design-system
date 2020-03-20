import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {resolveResponsiveClassnames} from '../util'
import Box from '../Box/Box'
import * as types from '../types'
import './columns.css'

const Columns = ({
  cols = 12,
  gap = 'gutter',
  colGap,
  rowGap,
  collapse,
  collapseBelowTablet,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-cols',
    resolveResponsiveClassnames('cols', cols, 'cols'),
    resolveResponsiveClassnames('cols', rowGap || gap, 'row-gap'),
    resolveResponsiveClassnames('cols', colGap || gap, 'col-gap'),
    {
      'u-cols--collapse-0': collapse || collapseBelowTablet,
      'u-cols--collapse-1': collapseBelowTablet,
    },
    className
  )

  return (
    <Box className={classes} {...props}>
      {children}
    </Box>
  )
}

Columns.propTypes = {
  /**
   * Amount of columns in the grid
   */
  cols: t.oneOfType([t.arrayOf(t.number), t.number]),
  /**
   * Sets even spacing for columns and rows
   */
  gap: types.spacing,
  /**
   * Sets even spacing for columns and rows
   */
  colGap: types.spacing,
  /**
   * Sets even spacing for columns and rows
   */
  rowGap: types.spacing,
}

export default Columns
