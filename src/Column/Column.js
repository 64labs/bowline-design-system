import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {resolveResponsiveClassnames} from '../util'
import Box from '../Box/Box'
import './column.css'

const Column = ({span, className, children, ...props}) => {
  const classes = cx(
    'u-col',
    resolveResponsiveClassnames('col', span, 'span'),
    className
  )

  return (
    <Box className={classes} {...props}>
      {children}
    </Box>
  )
}

Column.propTypes = {
  /**
   * Amount of columns to span
   */
  span: t.oneOfType([t.arrayOf(t.number), t.number]),
}

export default Column
