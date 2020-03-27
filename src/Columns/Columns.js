import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
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
      gridGap={gap}
      gridColumnGap={colGap}
      gridRowGap={rowGap}
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
  cols: t.oneOfType([t.number, t.arrayOf(t.number)]),
  /**
   * [spacing] Sets even spacing for columns and rows
   */
  gap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Sets even spacing for columns and rows
   */
  colGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
  /**
   * [spacing] Sets even spacing for columns and rows
   */
  rowGap: t.oneOfType([t.string, t.arrayOf(t.string)]),
}

export default Columns
