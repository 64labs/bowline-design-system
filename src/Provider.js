import React, {useContext} from 'react'

const ctx = React.createContext()

export const ThemeProvider = ctx.Provider

export const useTheme = () => {
  return useContext(ctx)
}
