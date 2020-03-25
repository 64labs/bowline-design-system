import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
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
    {
      'u-cols--collapse-0': collapse || collapseBelowTablet,
      'u-cols--collapse-1': collapseBelowTablet,
    },
    className
  )

  return (
    <Box
      display="grid"
      gridTemplateColumns={cols}
      gridRowGap={rowGap || gap}
      gridColumnGap={colGap || gap}
      className={classes}
      {...props}
    >
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
