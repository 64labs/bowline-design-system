import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {useColumns} from '../util/ColumnsContext'
import Box from '../Box/Box'

const Column = ({span = 1, className, children, ...props}) => {
  const columns = useColumns()
  const isResponsiveColumns = Array.isArray(columns)
  const isResponsiveSpan = Array.isArray(span)
  let _span = span

  if (isResponsiveColumns && !isResponsiveSpan) {
    _span = columns.map((c) => {
      if (c === 1) {
        return 1
      }
      return span
    })
  }

  if (isResponsiveColumns && isResponsiveSpan) {
    _span = columns.map((c, i) => {
      if (c === 1) {
        return 1
      }
      return span[i]
    })
  }

  if (!isResponsiveColumns && isResponsiveSpan) {
    _span = span.map((c) => {
      if (columns === 1) {
        return 1
      }
      return c
    })
  }

  if (!isResponsiveSpan && !isResponsiveSpan) {
    if (columns === 1) {
      _span = 1
    }
  }

  const classes = cx(className)

  return (
    <Box className={classes} gridColumn={_span} {...props}>
      {children}
    </Box>
  )
}

Column.propTypes = {
  /**
   * Amount of columns to span. If parent `Columns` col count is 1 for a given breakpoint, `span` is overridden internally to 1.
   */
  span: t.oneOfType([t.arrayOf(t.number), t.number]),
}

export default Column
