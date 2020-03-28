import React, {useContext} from 'react'

const columnsContext = React.createContext()

export const ColumnsProvider = columnsContext.Provider

export const renderColumnsProvider = (columnCount, element) =>
  columnCount ? (
    <ColumnsProvider value={columnCount}>{element}</ColumnsProvider>
  ) : (
    element
  )

export const useColumns = () => useContext(columnsContext)
