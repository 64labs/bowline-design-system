import React, {useContext} from 'react'

export const ctx = React.createContext()

const Provider = ctx.Provider

export const ThemeProvider = Provider

export const useTheme = () => {
  const theme = useContext(ctx)
  console.log('usetheme', theme)
  return theme
}
